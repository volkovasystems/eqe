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
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge






//: @bridge:

describe("eqe", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`eqe( function( ){ }, function( ){ } )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(function () {}, function () {});});
			assert.equal(result.value, true);

		});
	});


	describe("`eqe( Array, Array )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(Array, Array);});
			assert.equal(result.value, true);

		});
	});


	describe("`eqe( null, null )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(null, null);});
			assert.equal(result.value, true);

		});
	});


	describe("`eqe( undefined, undefined )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(undefined, undefined);});
			assert.equal(result.value, true);

		});
	});


	describe("`eqe( Symbol.for( 'hello' ), Symbol.for( 'hello' ) )`", function () {
		it("should be equal to true", function () {

			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => eqe( Symbol.for( "hello" ), Symbol.for( "hello" ) ) );
   			assert.equal( result.value, true );
   			//: @end-ignore

		});
	});


	describe("`eqe( Symbol( 'hi' ).toString( ), Symbol( 'hi' ).toString( ) )`", function () {
		it("should be equal to true", function () {

			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => eqe( Symbol( "hi" ).toString( ), Symbol( "hi" ).toString( ) ) );
   			assert.equal( result.value, true );
   			//: @end-ignore

		});
	});


	describe("`eqe( 0, '' )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(0, "");});
			assert.equal(result.value, false);

		});
	});


	describe("`eqe( null, undefined )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(null, undefined);});
			assert.equal(result.value, false);

		});
	});


	describe("`eqe( { }, { } )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe({}, {});});
			assert.equal(result.value, false);

		});
	});


	describe("`eqe( [ ], [ ] )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe([], []);});
			assert.equal(result.value, false);

		});
	});


	describe("`eqe( ( ) => { }, ( ) => { } )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(function () {}, function () {});});
			assert.equal(result.value, true);

		});
	});


	describe("`eqe( Array, 'Array' )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(Array, "Array");});
			assert.equal(result.value, false);

		});
	});


	describe("`eqe( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(function hello() {return "hello";}, function hello() {return "hi";});});
			assert.equal(result.value, false);

		});
	});


	describe("`eqe( 123, 456 )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return eqe(123, 456);});
			assert.equal(result.value, false);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImVxZSIsImVxdWFsIiwidmFsdWUiLCJBcnJheSIsInVuZGVmaW5lZCIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSx5Q0FBVixFQUFxRCxZQUFPO0FBQzNESSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLElBQUssWUFBVyxDQUFHLENBQW5CLEVBQXFCLFlBQVcsQ0FBRyxDQUFuQyxDQUFQLEVBQWxDLENBQWI7QUFDQVosVUFBT2EsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7O0FBVUFYLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxJQUFLRyxLQUFMLEVBQVlBLEtBQVosQ0FBUCxFQUFsQyxDQUFiO0FBQ0FmLFVBQU9hLEtB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Z2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVxZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZXFlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lcWUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImVxZVwiOiBcImVxZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwiZXFlXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBlcWUoIGZ1bmN0aW9uKCApeyB9LCBmdW5jdGlvbiggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggZnVuY3Rpb24oICl7IH0sIGZ1bmN0aW9uKCApeyB9ICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIEFycmF5LCBBcnJheSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggQXJyYXksIEFycmF5ICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIG51bGwsIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIG51bGwsIG51bGwgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggdW5kZWZpbmVkLCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIHVuZGVmaW5lZCwgdW5kZWZpbmVkICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSwgU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSwgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggU3ltYm9sKCAnaGknICkudG9TdHJpbmcoICksIFN5bWJvbCggJ2hpJyApLnRvU3RyaW5nKCApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCBTeW1ib2woIFwiaGlcIiApLnRvU3RyaW5nKCApLCBTeW1ib2woIFwiaGlcIiApLnRvU3RyaW5nKCApICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIDAsICcnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggMCwgXCJcIiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggbnVsbCwgdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggbnVsbCwgdW5kZWZpbmVkICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCB7IH0sIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIHsgfSwgeyB9ICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCBbIF0sIFsgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIFsgXSwgWyBdICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgZXFlKCAoICkgPT4geyB9LCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCAoICkgPT4geyB9LCAoICkgPT4geyB9ICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBlcWUoIEFycmF5LCAnQXJyYXknIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggQXJyYXksIFwiQXJyYXlcIiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGVsbG8nIH0sIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hpJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiBcImhlbGxvXCIgfSwgZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiBcImhpXCIgfSApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGVxZSggMTIzLCA0NTYgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCAxMjMsIDQ1NiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
