var unit = require(__dirname + '/../main/unitjs.js');
//define render for jsnode
var render = function (errors,tol,sucs) {
	if(0 == errors.length) {
		console.log("all success");
		return ;
	}

	var content = "";
	for(var i in errors) {
		content += errors[i].method+"|";
	}
	console.log("test fail method :" + content);
};

unit.TestSuite.init(render);
var simpleTestCase = unit.TestSuite.create();
//define test method
simpleTestCase.test_int = function() {
	assertEqual("1 equals 1 fail)", 2, 1);
	assertEqual(2,1);
};

new unit.TestSuite().add(simpleTestCase).run();
