"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "eqe",
			"path": "eqe/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/eqe.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"eqe": "eqe"
		}
	@end-include
*/var _symbol=require("babel-runtime/core-js/symbol");var _symbol2=_interopRequireDefault(_symbol);var _for=require("babel-runtime/core-js/symbol/for");var _for2=_interopRequireDefault(_for);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var assert=require("should");



//: @client:
var eqe=require("./eqe.support.js");
//: @end-client






//: @client:
describe("eqe",function(){

describe("`eqe( function( ){ }, function( ){ } )`",function(){
it("should be equal to true",function(){

assert.equal(eqe(function(){},function(){}),true);

});
});

describe("`eqe( Array, Array )`",function(){
it("should be equal to true",function(){

assert.equal(eqe(Array,Array),true);

});
});

describe("`eqe( null, null )`",function(){
it("should be equal to true",function(){

assert.equal(eqe(null,null),true);

});
});

	describe("`eqe( Symbol.for( 'hello' ), Symbol.for( 'hello' ) )`", function () {
		it("should be equal to true", function () {

			assert.equal(eqe((0, _for2.default)("hello"), (0, _for2.default)("hello")), true);

		});
	});

assert.equal(eqe(undefined,undefined),true);

});
});

describe("`eqe( Symbol.for( 'hello' ), Symbol.for( 'hello' ) )`",function(){
it("should be equal to true",function(){
//: @ignore:
assert.equal(eqe((0,_for2.default)("hello"),(0,_for2.default)("hello")),true);
//: @end-ignore
});
});

describe("`eqe( Symbol( 'hi' ).toString( ), Symbol( 'hi' ).toString( ) )`",function(){
it("should be equal to true",function(){

assert.equal(eqe((0,_symbol2.default)("hi").toString(),(0,_symbol2.default)("hi").toString()),true);

});
});

describe("`eqe( 0, '' )`",function(){
it("should be equal to false",function(){

assert.equal(eqe(0,""),false);

});
});

describe("`eqe( null, undefined )`",function(){
it("should be equal to false",function(){

assert.equal(eqe(null,undefined),false);

});
});

describe("`eqe( { }, { } )`",function(){
it("should be equal to false",function(){

assert.equal(eqe({},{}),false);

});
});

describe("`eqe( [ ], [ ] )`",function(){
it("should be equal to false",function(){

assert.equal(eqe([],[]),false);

});
});

describe("`eqe( ( ) => { }, ( ) => { } )`",function(){
it("should be equal to true",function(){

assert.equal(eqe(function(){},function(){}),true);

});
});

describe("`eqe( Array, 'Array' )`",function(){
it("should be equal to false",function(){

assert.equal(eqe(Array,"Array"),false);

});
});

describe("`eqe( function hello( ){ return 'hello'; }, function hello( ){ return 'hi'; } )`",function(){
it("should be equal to false",function(){

assert.equal(eqe(function hello(){return"hello";},function hello(){return"hi";}),false);

});
});

describe("`eqe( function hello( ){ return 'hello'; }, function hello( ){ return 'hello'; } )`",function(){
it("should be equal to true",function(){

assert.equal(eqe(function hello(){return"hello";},function hello(){return"hello";}),true);

});
});

describe("`eqe( 123, 456 )`",function(){
it("should be equal to false",function(){

assert.equal(eqe(123,456),false);


	describe("`eqe( 123, 456 )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe(123, 456), false);

		});
	});

});
});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZXFlIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiQXJyYXkiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxrQkFBVCxDQUFaO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCQSxVQUFVLHlDQUFWLEVBQXFELFlBQU87QUFDM0RDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxZQUFXLENBQUcsQ0FBbkIsRUFBcUIsWUFBVyxDQUFHLENBQW5DLENBQWQsRUFBcUQsSUFBckQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBS0ksS0FBTCxFQUFZQSxLQUFaLENBQWQsRUFBbUMsSUFBbkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxJQUFMLEVBQVcsSUFBWCxDQUFkLEVBQWlDLElBQWpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSwrQkFBVixFQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILElBQUtLLFNBQUwsRUFBZ0JBLFNBQWhCLENBQWQsRUFBMkMsSUFBM0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSixVQUFVLHVEQUFWLEVBQW1FLFlBQU87QUFDekVDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxtQkFBWSxPQUFaLENBQUwsRUFBNEIsbUJBQVksT0FBWixDQUE1QixDQUFkLEVBQW1FLElBQW5FOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxpRUFBVixFQUE2RSxZQUFPO0FBQ25GQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILElBQUssc0JBQVEsSUFBUixFQUFlTSxRQUFmLEVBQUwsRUFBaUMsc0JBQVEsSUFBUixFQUFlQSxRQUFmLEVBQWpDLENBQWQsRUFBNkUsSUFBN0U7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBTCxVQUFVLGdCQUFWLEVBQTRCLFlBQU87QUFDbENDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxDQUFMLEVBQVEsRUFBUixDQUFkLEVBQTRCLEtBQTVCOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSwwQkFBVixFQUFzQyxZQUFPO0FBQzVDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILElBQUssSUFBTCxFQUFXSyxTQUFYLENBQWQsRUFBc0MsS0FBdEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSixVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDckNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxFQUFMLEVBQVUsRUFBVixDQUFkLEVBQStCLEtBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxtQkFBVixFQUErQixZQUFPO0FBQ3JDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILElBQUssRUFBTCxFQUFVLEVBQVYsQ0FBZCxFQUErQixLQUEvQjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQ0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLFlBQU8sQ0FBRyxDQUFmLEVBQWlCLFlBQU8sQ0FBRyxDQUEzQixDQUFkLEVBQTZDLElBQTdDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILElBQUtJLEtBQUwsRUFBWSxPQUFaLENBQWQsRUFBcUMsS0FBckM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSCxVQUFVLGdGQUFWLEVBQTRGLFlBQU87QUFDbEdDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxTQUFTTyxLQUFULEdBQWlCLENBQUUsT0FBTyxPQUFQLENBQWdCLENBQXhDLEVBQTBDLFNBQVNBLEtBQVQsR0FBaUIsQ0FBRSxPQUFPLElBQVAsQ0FBYSxDQUExRSxDQUFkLEVBQTRGLEtBQTVGOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQU4sVUFBVSxtQkFBVixFQUErQixZQUFPO0FBQ3JDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILElBQUssR0FBTCxFQUFVLEdBQVYsQ0FBZCxFQUErQixLQUEvQjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQSxDQS9IRDs7QUFpSUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlcWVcIixcblx0XHRcdFwicGF0aFwiOiBcImVxZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZXFlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiLi9lcWUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJlcWVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZXFlKCBmdW5jdGlvbiggKXsgfSwgZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggZnVuY3Rpb24oICl7IH0sIGZ1bmN0aW9uKCApeyB9ICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggQXJyYXksIEFycmF5IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIEFycmF5LCBBcnJheSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIG51bGwsIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggbnVsbCwgbnVsbCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIHVuZGVmaW5lZCwgdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIHVuZGVmaW5lZCwgdW5kZWZpbmVkICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggU3ltYm9sLmZvciggJ2hlbGxvJyApLCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICksIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggU3ltYm9sKCAnaGknICkudG9TdHJpbmcoICksIFN5bWJvbCggJ2hpJyApLnRvU3RyaW5nKCApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIFN5bWJvbCggXCJoaVwiICkudG9TdHJpbmcoICksIFN5bWJvbCggXCJoaVwiICkudG9TdHJpbmcoICkgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCAwLCAnJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggMCwgXCJcIiApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCBudWxsLCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIG51bGwsIHVuZGVmaW5lZCApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCB7IH0sIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggeyB9LCB7IH0gKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggWyBdLCBbIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIFsgXSwgWyBdICksIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoICggKSA9PiB7IH0sICggKSA9PiB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggKCApID0+IHsgfSwgKCApID0+IHsgfSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIEFycmF5LCAnQXJyYXknIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBBcnJheSwgXCJBcnJheVwiICksIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9LCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuICdoaScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiBcImhlbGxvXCIgfSwgZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiBcImhpXCIgfSApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCAxMjMsIDQ1NiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggMTIzLCA0NTYgKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
