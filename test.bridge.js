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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImVxZSIsImVxdWFsIiwidmFsdWUiLCJBcnJheSIsInVuZGVmaW5lZCIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLEtBQVYsRUFBaUIsWUFBTzs7QUFFdkIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUseUNBQVYsRUFBcUQsWUFBTztBQUMzREksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLElBQUssWUFBVyxDQUFHLENBQW5CLEVBQXFCLFlBQVcsQ0FBRyxDQUFuQyxDQUFQLEVBQWxDLENBQWI7QUFDQVosVUFBT2EsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1QjtBQUNBLEdBSEQ7QUFJQSxFQUxEOzs7QUFRQVgsVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsSUFBS0csS0FBTCxFQUFZQSxLQUFaLENBQVAsRUFBbEMsQ0FBYjtBQUNBZixVQUFPYSxLQUFQ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InVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZXFlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImVxZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZXFlLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJlcWVcIiwgKCApID0+IHtcclxuXHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBmdW5jdGlvbiggKXsgfSwgZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggZnVuY3Rpb24oICl7IH0sIGZ1bmN0aW9uKCApeyB9ICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBBcnJheSwgQXJyYXkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggQXJyYXksIEFycmF5ICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBudWxsLCBudWxsIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIG51bGwsIG51bGwgKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBlcWUoIHVuZGVmaW5lZCwgdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIHVuZGVmaW5lZCwgdW5kZWZpbmVkICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICksIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApICk7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBTeW1ib2woICdoaScgKS50b1N0cmluZyggKSwgU3ltYm9sKCAnaGknICkudG9TdHJpbmcoICkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCBTeW1ib2woIFwiaGlcIiApLnRvU3RyaW5nKCApLCBTeW1ib2woIFwiaGlcIiApLnRvU3RyaW5nKCApICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBlcWUoIDAsICcnIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCAwLCBcIlwiICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggbnVsbCwgdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCBudWxsLCB1bmRlZmluZWQgKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCB7IH0sIHsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggeyB9LCB7IH0gKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCBbIF0sIFsgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVxZSggWyBdLCBbIF0gKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgZXFlKCAoICkgPT4geyB9LCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoICggKSA9PiB7IH0sICggKSA9PiB7IH0gKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBlcWUoIEFycmF5LCAnQXJyYXknIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCBBcnJheSwgXCJBcnJheVwiICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGVsbG8nIH0sIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hpJyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZXFlKCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9LCBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGlcIiB9ICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVxZSggMTIzLCA0NTYgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlcWUoIDEyMywgNDU2ICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIGZhbHNlICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
