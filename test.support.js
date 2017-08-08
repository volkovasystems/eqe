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
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var eqe = require("./eqe.support.js");
//: @end-client






//: @client:

describe("eqe", function () {

	describe("`eqe( function( ){ }, function( ){ } )`", function () {
		it("should be equal to true", function () {

			assert.equal(eqe(function () {}, function () {}), true);

		});
	});


	describe("`eqe( Array, Array )`", function () {
		it("should be equal to true", function () {

			assert.equal(eqe(Array, Array), true);

		});
	});


	describe("`eqe( null, null )`", function () {
		it("should be equal to true", function () {

			assert.equal(eqe(null, null), true);

		});
	});


	describe("`eqe( undefined, undefined )`", function () {
		it("should be equal to true", function () {

			assert.equal(eqe(undefined, undefined), true);

		});
	});


	describe("`eqe( Symbol.for( 'hello' ), Symbol.for( 'hello' ) )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
			assert.equal(eqe((0, _for2.default)("hello"), (0, _for2.default)("hello")), true);
			//: @end-ignore
		});
	});


	describe("`eqe( Symbol( 'hi' ).toString( ), Symbol( 'hi' ).toString( ) )`", function () {
		it("should be equal to true", function () {

			assert.equal(eqe((0, _symbol2.default)("hi").toString(), (0, _symbol2.default)("hi").toString()), true);

		});
	});


	describe("`eqe( 0, '' )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe(0, ""), false);

		});
	});


	describe("`eqe( null, undefined )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe(null, undefined), false);

		});
	});


	describe("`eqe( { }, { } )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe({}, {}), false);

		});
	});


	describe("`eqe( [ ], [ ] )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe([], []), false);

		});
	});


	describe("`eqe( ( ) => { }, ( ) => { } )`", function () {
		it("should be equal to true", function () {

			assert.equal(eqe(function () {}, function () {}), true);

		});
	});


	describe("`eqe( Array, 'Array' )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe(Array, "Array"), false);

		});
	});


	describe("`eqe( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe(function hello() {return "hello";}, function hello() {return "hi";}), false);

		});
	});


	describe("`eqe( 123, 456 )`", function () {
		it("should be equal to false", function () {

			assert.equal(eqe(123, 456), false);

		});
	});


});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZXFlIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiQXJyYXkiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxrQkFBVCxDQUFaO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCQSxVQUFVLHlDQUFWLEVBQXFELFlBQU87QUFDM0RDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxZQUFXLENBQUcsQ0FBbkIsRUFBcUIsWUFBVyxDQUFHLENBQW5DLENBQWQsRUFBcUQsSUFBckQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBS0ksS0FBTCxFQUFZQSxLQUFaLENBQWQsRUFBbUMsSUFBbkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxJQUFMLEVBQVcsSUFBWCxDQUFkLEVBQWlDLElBQWpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSwrQkFBVixFQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILElBQUtLLFNBQUwsRUFBZ0JBLFNBQWhCLENBQWQsRUFBMkMsSUFBM0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSixVQUFVLHVEQUFWLEVBQW1FLFlBQU87QUFDekVDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQztBQUNBSixVQUFPSyxLQUFQLENBQWNILElBQUssbUJBQVksT0FBWixDQUFMLEVBQTRCLG1CQUFZLE9BQVosQ0FBNUIsQ0FBZCxFQUFtRSxJQUFuRTtBQUNBO0FBQ0EsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGlFQUFWLEVBQTZFLFlBQU87QUFDbkZDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxzQkFBUSxJQUFSLEVBQWVNLFFBQWYsRUFBTCxFQUFpQyxzQkFBUSxJQUFSLEVBQWVBLFFBQWYsRUFBakMsQ0FBZCxFQUE2RSxJQUE3RTs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FMLFVBQVUsZ0JBQVYsRUFBNEIsWUFBTztBQUNsQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLENBQUwsRUFBUSxFQUFSLENBQWQsRUFBNEIsS0FBNUI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxJQUFMLEVBQVdLLFNBQVgsQ0FBZCxFQUFzQyxLQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FKLFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLEVBQUwsRUFBVSxFQUFWLENBQWQsRUFBK0IsS0FBL0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDckNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxFQUFMLEVBQVUsRUFBVixDQUFkLEVBQStCLEtBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25EQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILElBQUssWUFBTyxDQUFHLENBQWYsRUFBaUIsWUFBTyxDQUFHLENBQTNCLENBQWQsRUFBNkMsSUFBN0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBS0ksS0FBTCxFQUFZLE9BQVosQ0FBZCxFQUFxQyxLQUFyQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FILFVBQVUsZ0ZBQVYsRUFBNEYsWUFBTztBQUNsR0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLFNBQVNPLEtBQVQsR0FBaUIsQ0FBRSxPQUFPLE9BQVAsQ0FBZ0IsQ0FBeEMsRUFBMEMsU0FBU0EsS0FBVCxHQUFpQixDQUFFLE9BQU8sSUFBUCxDQUFhLENBQTFFLENBQWQsRUFBNEYsS0FBNUY7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBTixVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDckNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxHQUFMLEVBQVUsR0FBVixDQUFkLEVBQStCLEtBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQSxDQWhJRDs7QUFrSUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlcWVcIixcblx0XHRcdFwicGF0aFwiOiBcImVxZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZXFlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiLi9lcWUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJlcWVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZXFlKCBmdW5jdGlvbiggKXsgfSwgZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggZnVuY3Rpb24oICl7IH0sIGZ1bmN0aW9uKCApeyB9ICksIHRydWUgKTtcblx0XHRcblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIEFycmF5LCBBcnJheSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBBcnJheSwgQXJyYXkgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCBudWxsLCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIG51bGwsIG51bGwgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCB1bmRlZmluZWQsIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCB1bmRlZmluZWQsIHVuZGVmaW5lZCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSwgU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCB0cnVlICk7XG5cdFx0XHQvLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIFN5bWJvbCggJ2hpJyApLnRvU3RyaW5nKCApLCBTeW1ib2woICdoaScgKS50b1N0cmluZyggKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBTeW1ib2woIFwiaGlcIiApLnRvU3RyaW5nKCApLCBTeW1ib2woIFwiaGlcIiApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggMCwgJycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIDAsIFwiXCIgKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggbnVsbCwgdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBudWxsLCB1bmRlZmluZWQgKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggeyB9LCB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIHsgfSwgeyB9ICksIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIFsgXSwgWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBbIF0sIFsgXSApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCAoICkgPT4geyB9LCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoICggKSA9PiB7IH0sICggKSA9PiB7IH0gKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCBBcnJheSwgJ0FycmF5JyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggQXJyYXksIFwiQXJyYXlcIiApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuICdoZWxsbycgfSwgZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGknIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoZWxsb1wiIH0sIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gXCJoaVwiIH0gKSwgZmFsc2UgKTtcblx0XHRcdFxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggMTIzLCA0NTYgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIDEyMywgNDU2ICksIGZhbHNlICk7XG5cdFx0XHRcblx0XHR9ICk7XG5cdH0gKTtcblxuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
