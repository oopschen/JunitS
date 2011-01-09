/**
* @author raychen.chenl
**/
var unit = {};
(function($){
	var STR_EMPTY = "";

	var AssertException = function(message){
		this.name = "AssertException";
		this.message = message ? message : STR_EMPTY;
	};
	
	AssertException.prototype.toString = function() {
		return this.name + ":\n\t" + this. message;	
	};

	var TestCase = function(){};

	var assert = function() {
		if(4 == arguments.length) {
			if(!arguments[3](arguments[1],arguments[2])) {
				throw new AssertException(arguments[0]);
			}
		} else if (3 == arguments.length) {
			if(!arguments[2](arguments[1])) {
				throw new AssertException(arguments[0]);
			}
		} else if (2 == arguments.length) {
			if(!arguments[1](arguments[0])) {
				throw new AssertException(arguments[0]);
			}
		}
	};

	var argLenCondition = function(params,callbacks,args) {
		for(var i in params) {
			if(params[i] == args.length) {
				callbacks[i].apply(callbacks[i],args);
			}
		}
	};

	var toArr = function(args) {
		var ret = [];
		for(var i = 0 ; i < args.length ; i++) {
			ret.push(args[i]);
		}
		return ret;
	};

	var paramLenCondition = function(condition,args) {
		argLenCondition(condition,[
				assert,
				function() { assert.apply(assert,[STR_EMPTY].concat(toArr(arguments)));}
			],args);
	};

	/**
	* @params [message],expected,actual
	**/
	TestCase.prototype.assertEqual = function() {
		paramLenCondition([4,3],toArr(arguments).concat([function(expected,actual){ return expected == actual; }]));
	};

	/**
	* @params [message],actual
	**/
	TestCase.prototype.assertTrue = function() {
		paramLenCondition([3,2],toArr(arguments).concat([function(actual){ return true === actual; }]));
	};

	/**
	* @params [message],actual
	**/
	TestCase.prototype.assertFalse = function() {
		paramLenCondition([3,2],toArr(arguments).concat([function(actual){ return false === actual; }]));
	};

	/**
	* @params [message],actual
	**/
	TestCase.prototype.assertUndefined = function() {
		paramLenCondition([3,2],toArr(arguments).concat([function(actual){ return undefined === actual; }]));
	};

	/**
	* @params [message],actual
	**/
	TestCase.prototype.assertNull = function() {
		paramLenCondition([3,2],toArr(arguments).concat([function(actual){ return null === actual; }]));
	};
	
	/**
	* @params [message],actual
	**/
	TestCase.prototype.fail = function(message) {
		assert(message ? message : STR_EMPTY, function(){return false;});
	};

	//TODO assertArray assertObj

	$.TestCase = TestCase;

	//TODO TESTSUITE
})(unit);
