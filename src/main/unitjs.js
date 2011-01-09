var unit = {};
(function($){
	var STR_EMPTY = "";
	var AssertException = function(){};
	AssertException.prototype = Error.prototype;

	var TestCase = function(){};

	var assert = function(message,expected,actual,fnCompare) {
		if(!fnCompare(expected,actual) {
			throw new AssertException(message ? message : STR_EMPTY);
		}
	};

	var argLenCondition = function() {
		if(4 == arguments.length) {
			assert.apply(this,arguments);
		} else if (3 == arguments.length) {
			assert.apply(this,[STR_EMPTY].concat(toArr(arguments)));
		}
	};

	var toArr = function() {
		var ret = [];
		for(var i in arguments) {
			ret.push(arguments[i]);
		}
		return ret;
	};

	TestCase.prototype.assertEqual = function() {
		argLenCondition.apply(this,toArr(arguments).concat(function(expected,actual){
			return expected == actual;
		}));
	};	
	
})(unit);
