/**
* this is a simple example to demenstrate how 
* to use the framework
*
**/
var simpleTestCase = function(){};
//inherite unit.TestCase
simpleTestCase.prototype = unit.TestCase.prototype;

//define test method
simpleTestCase.test_int = function() {
	assertEqual("1 equals 1 fail)", 2, 1);
	assertEqual(2,1);
};

unit.TestSuite.add(simpleTestCase).run();
