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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbIm5hZmUiLCJyZXF1aXJlIiwic3RyaW5nZSIsImVxZSIsInNvdXJjZSIsInRhcmdldCIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFVBQVVELFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRSxNQUFNLFNBQVNBLEdBQVQsQ0FBY0MsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEI7QUFDekM7Ozs7Ozs7OztBQVNBLEtBQUc7QUFDRjtBQUNDLFNBQU9ELE1BQVAsSUFBaUIsVUFBakI7QUFDRyxTQUFPQyxNQUFQLElBQWlCLFVBRHBCO0FBRUcsR0FBQ0wsS0FBTUksTUFBTixDQUZKO0FBR0csR0FBQ0osS0FBTUssTUFBTixDQUpMO0FBS0M7QUFDQSxVQUFPSCxRQUFTRSxNQUFULEtBQXFCRixRQUFTRyxNQUFULENBQXJCLElBQTBDRCxXQUFXQyxNQUE1RDtBQUNBOztBQUVELFNBQU9ELFdBQVdDLE1BQWxCOztBQUVBLEVBWkQsQ0FZQyxPQUFPQyxLQUFQLEVBQWM7QUFDZCxTQUFPLEtBQVA7QUFDQTtBQUNELENBekJEOztBQTJCQUMsT0FBT0MsT0FBUCxHQUFpQkwsR0FBakIiLCJmaWxlIjoiZXFlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZXFlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImVxZS9lcWUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZXFlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiZXFlXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VxZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiZXFlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0U2hhbGxvdyBlcXVhbC5cclxuXHJcblx0XHRGb3IgY2FzZXMgb2YgZnVuY3Rpb24sIHR3byBmdW5jdGlvbnMgYXJlIGVxdWFsIGlmIHRoZWlyIGNvbnRlbnRzIGFyZSBlcXVhbCBhbmRcclxuXHRcdFx0Ym90aCBhcmUgbm90IG5hdGl2ZS4gVGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSwgZnVuY3Rpb25zIHRlbmQgdG8gaGF2ZVxyXG5cdFx0XHRkaWZmZXJlbnQgcmVmZXJlbmNlcyBidXQgc2FtZSBsb29rLCB3aGljaCBtYXkgYmUgaW1wbGllZCB0aGF0IHRoZXkgYXJlXHJcblx0XHRcdGNyZWF0ZWQgdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uIGFuZCB0aHVzIG1heSBwcm9kdWNlIGRpZmZlcmVudCByZWZlcmVuY2VzXHJcblx0XHRcdGFsdGhvdWdoIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50LlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwibmFmZVwiOiBcIm5hZmVcIixcclxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBuYWZlID0gcmVxdWlyZSggXCJuYWZlXCIgKTtcclxuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XHJcblxyXG5jb25zdCBlcWUgPSBmdW5jdGlvbiBlcWUoIHNvdXJjZSwgdGFyZ2V0ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCIqXCIsXHJcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCIqXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHR0cnl7XHJcblx0XHRpZihcclxuXHRcdFx0dHlwZW9mIHNvdXJjZSA9PSBcImZ1bmN0aW9uXCJcclxuXHRcdFx0JiYgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCJcclxuXHRcdFx0JiYgIW5hZmUoIHNvdXJjZSApXHJcblx0XHRcdCYmICFuYWZlKCB0YXJnZXQgKVxyXG5cdFx0KXtcclxuXHRcdFx0cmV0dXJuIHN0cmluZ2UoIHNvdXJjZSApID09IHN0cmluZ2UoIHRhcmdldCApIHx8IHNvdXJjZSA9PT0gdGFyZ2V0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzb3VyY2UgPT09IHRhcmdldDtcclxuXHJcblx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXFlO1xyXG4iXX0=
//# sourceMappingURL=eqe.support.js.map
