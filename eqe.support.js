"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "eqe",
              			"path": "eqe/eqe.js",
              			"file": "eqe.js",
              			"module": "eqe",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/eqe.git",
              			"test": "eqe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Shallow equal.
              
              		For cases of function, two functions are equal if their contents are equal and
              			both are not native. This is important because, functions tend to have
              			different references but same look, which may be implied that they are
              			created using a factory function and thus may produce different references
              			although they have the same content.
              	@end-module-documentation
              
              	@include:
              		{
              			"nafe": "nafe",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var nafe = require("nafe");
var stringe = require("stringe");

var eqe = function eqe(source, target) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"source:required": "*",
                                        			"target:required": "*"
                                        		}
                                        	@end-meta-configuration
                                        */

	try {
		if (
		typeof source == "function" &&
		typeof target == "function" &&
		!nafe(source) &&
		!nafe(target))
		{
			return stringe(source) == stringe(target) || source === target;
		}

		return source === target;

	} catch (error) {
		return false;
	}
};

module.exports = eqe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbIm5hZmUiLCJyZXF1aXJlIiwic3RyaW5nZSIsImVxZSIsInNvdXJjZSIsInRhcmdldCIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRSxNQUFNLFNBQVNBLEdBQVQsQ0FBY0MsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEI7QUFDekM7Ozs7Ozs7OztBQVNBLEtBQUc7QUFDRjtBQUNDLFNBQU9ELE1BQVAsSUFBaUIsVUFBakI7QUFDRyxTQUFPQyxNQUFQLElBQWlCLFVBRHBCO0FBRUcsR0FBQ0wsS0FBTUksTUFBTixDQUZKO0FBR0csR0FBQ0osS0FBTUssTUFBTixDQUpMO0FBS0M7QUFDQSxVQUFPSCxRQUFTRSxNQUFULEtBQXFCRixRQUFTRyxNQUFULENBQXJCLElBQTBDRCxXQUFXQyxNQUE1RDtBQUNBOztBQUVELFNBQU9ELFdBQVdDLE1BQWxCOztBQUVBLEVBWkQsQ0FZQyxPQUFPQyxLQUFQLEVBQWM7QUFDZCxTQUFPLEtBQVA7QUFDQTtBQUNELENBekJEOztBQTJCQUMsT0FBT0MsT0FBUCxHQUFpQkwsR0FBakIiLCJmaWxlIjoiZXFlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVxZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZXFlL2VxZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZXFlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVxZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZXFlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZXFlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0U2hhbGxvdyBlcXVhbC5cblxuXHRcdEZvciBjYXNlcyBvZiBmdW5jdGlvbiwgdHdvIGZ1bmN0aW9ucyBhcmUgZXF1YWwgaWYgdGhlaXIgY29udGVudHMgYXJlIGVxdWFsIGFuZFxuXHRcdFx0Ym90aCBhcmUgbm90IG5hdGl2ZS4gVGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSwgZnVuY3Rpb25zIHRlbmQgdG8gaGF2ZVxuXHRcdFx0ZGlmZmVyZW50IHJlZmVyZW5jZXMgYnV0IHNhbWUgbG9vaywgd2hpY2ggbWF5IGJlIGltcGxpZWQgdGhhdCB0aGV5IGFyZVxuXHRcdFx0Y3JlYXRlZCB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24gYW5kIHRodXMgbWF5IHByb2R1Y2UgZGlmZmVyZW50IHJlZmVyZW5jZXNcblx0XHRcdGFsdGhvdWdoIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJuYWZlXCI6IFwibmFmZVwiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IG5hZmUgPSByZXF1aXJlKCBcIm5hZmVcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5cbmNvbnN0IGVxZSA9IGZ1bmN0aW9uIGVxZSggc291cmNlLCB0YXJnZXQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHR0cnl7XG5cdFx0aWYoXG5cdFx0XHR0eXBlb2Ygc291cmNlID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmICFuYWZlKCBzb3VyY2UgKVxuXHRcdFx0JiYgIW5hZmUoIHRhcmdldCApXG5cdFx0KXtcblx0XHRcdHJldHVybiBzdHJpbmdlKCBzb3VyY2UgKSA9PSBzdHJpbmdlKCB0YXJnZXQgKSB8fCBzb3VyY2UgPT09IHRhcmdldDtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlID09PSB0YXJnZXQ7XG5cblx0fWNhdGNoKCBlcnJvciApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlcWU7XG4iXX0=
//# sourceMappingURL=eqe.support.js.map
