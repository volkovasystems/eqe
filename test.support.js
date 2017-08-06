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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZXFlIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiQXJyYXkiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxrQkFBVCxDQUFaO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCQSxVQUFVLHlDQUFWLEVBQXFELFlBQU87QUFDM0RDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxZQUFXLENBQUcsQ0FBbkIsRUFBcUIsWUFBVyxDQUFHLENBQW5DLENBQWQsRUFBcUQsSUFBckQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBS0ksS0FBTCxFQUFZQSxLQUFaLENBQWQsRUFBbUMsSUFBbkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxJQUFMLEVBQVcsSUFBWCxDQUFkLEVBQWlDLElBQWpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSwrQkFBVixFQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILElBQUtLLFNBQUwsRUFBZ0JBLFNBQWhCLENBQWQsRUFBMkMsSUFBM0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSixVQUFVLHVEQUFWLEVBQW1FLFlBQU87QUFDekVDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQztBQUNBSixVQUFPSyxLQUFQLENBQWNILElBQUssbUJBQVksT0FBWixDQUFMLEVBQTRCLG1CQUFZLE9BQVosQ0FBNUIsQ0FBZCxFQUFtRSxJQUFuRTtBQUNBO0FBQ0EsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGlFQUFWLEVBQTZFLFlBQU87QUFDbkZDLEtBQUkseUJBQUosRUFBK0IsWUFBTzs7QUFFckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxzQkFBUSxJQUFSLEVBQWVNLFFBQWYsRUFBTCxFQUFpQyxzQkFBUSxJQUFSLEVBQWVBLFFBQWYsRUFBakMsQ0FBZCxFQUE2RSxJQUE3RTs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FMLFVBQVUsZ0JBQVYsRUFBNEIsWUFBTztBQUNsQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLENBQUwsRUFBUSxFQUFSLENBQWQsRUFBNEIsS0FBNUI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxJQUFMLEVBQVdLLFNBQVgsQ0FBZCxFQUFzQyxLQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FKLFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLEVBQUwsRUFBVSxFQUFWLENBQWQsRUFBK0IsS0FBL0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDckNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxFQUFMLEVBQVUsRUFBVixDQUFkLEVBQStCLEtBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25EQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDSixVQUFPSyxLQUFQLENBQWNILElBQUssWUFBTyxDQUFHLENBQWYsRUFBaUIsWUFBTyxDQUFHLENBQTNCLENBQWQsRUFBNkMsSUFBN0M7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBS0ksS0FBTCxFQUFZLE9BQVosQ0FBZCxFQUFxQyxLQUFyQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FILFVBQVUsZ0ZBQVYsRUFBNEYsWUFBTztBQUNsR0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLFNBQVNPLEtBQVQsR0FBaUIsQ0FBRSxPQUFPLE9BQVAsQ0FBZ0IsQ0FBeEMsRUFBMEMsU0FBU0EsS0FBVCxHQUFpQixDQUFFLE9BQU8sSUFBUCxDQUFhLENBQTFFLENBQWQsRUFBNEYsS0FBNUY7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBTixVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDckNDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxHQUFMLEVBQVUsR0FBVixDQUFkLEVBQStCLEtBQS9COztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQSxDQWhJRDs7QUFrSUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImVxZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJlcWUvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VxZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImVxZVwiOiBcImVxZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBlcWUgPSByZXF1aXJlKCBcIi4vZXFlLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcblxyXG5kZXNjcmliZSggXCJlcWVcIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggZnVuY3Rpb24oICl7IH0sIGZ1bmN0aW9uKCApeyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIGZ1bmN0aW9uKCApeyB9LCBmdW5jdGlvbiggKXsgfSApLCB0cnVlICk7XHJcblx0XHRcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBBcnJheSwgQXJyYXkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggQXJyYXksIEFycmF5ICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggbnVsbCwgbnVsbCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBudWxsLCBudWxsICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggdW5kZWZpbmVkLCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggdW5kZWZpbmVkLCB1bmRlZmluZWQgKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XHJcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSwgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgdHJ1ZSApO1xyXG5cdFx0XHQvLzogQGVuZC1pZ25vcmVcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBTeW1ib2woICdoaScgKS50b1N0cmluZyggKSwgU3ltYm9sKCAnaGknICkudG9TdHJpbmcoICkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggU3ltYm9sKCBcImhpXCIgKS50b1N0cmluZyggKSwgU3ltYm9sKCBcImhpXCIgKS50b1N0cmluZyggKSApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBlcWUoIDAsICcnIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCAwLCBcIlwiICksIGZhbHNlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBlcWUoIG51bGwsIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdFxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggbnVsbCwgdW5kZWZpbmVkICksIGZhbHNlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBlcWUoIHsgfSwgeyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCB7IH0sIHsgfSApLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBbIF0sIFsgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVxZSggWyBdLCBbIF0gKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggKCApID0+IHsgfSwgKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCAoICkgPT4geyB9LCAoICkgPT4geyB9ICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggQXJyYXksICdBcnJheScgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlcWUoIEFycmF5LCBcIkFycmF5XCIgKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGVsbG8nIH0sIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hpJyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9LCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGlcIiB9ICksIGZhbHNlICk7XHJcblx0XHRcdFxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBlcWUoIDEyMywgNDU2IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZXFlKCAxMjMsIDQ1NiApLCBmYWxzZSApO1xyXG5cdFx0XHRcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
