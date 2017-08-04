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

const assert = require( "should" );

//: @server:
const eqe = require( "./eqe.js" );
//: @end-server

//: @client:
const eqe = require( "./eqe.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "eqe", ( ) => {

	describe( "`eqe( function( ){ }, function( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( function( ){ }, function( ){ } ), true );
		} );
	} );


	describe( "`eqe( Array, Array )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( Array, Array ), true );
		} );
	} );


	describe( "`eqe( null, null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( null, null ), true );
		} );
	} );


	describe( "`eqe( undefined, undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( undefined, undefined ), true );
		} );
	} );


	describe( "`eqe( Symbol.for( 'hello' ), Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			assert.equal( eqe( Symbol.for( "hello" ), Symbol.for( "hello" ) ), true );
			//: @end-ignore
		} );
	} );


	describe( "`eqe( Symbol( 'hi' ).toString( ), Symbol( 'hi' ).toString( ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( Symbol( "hi" ).toString( ), Symbol( "hi" ).toString( ) ), true );
		} );
	} );


	describe( "`eqe( 0, '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( 0, "" ), false );
		} );
	} );


	describe( "`eqe( null, undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( null, undefined ), false );
		} );
	} );


	describe( "`eqe( { }, { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( { }, { } ), false );
		} );
	} );


	describe( "`eqe( [ ], [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( [ ], [ ] ), false );
		} );
	} );


	describe( "`eqe( ( ) => { }, ( ) => { } )`", ( ) => {

		it( "should be equal to true", ( ) => {
			assert.equal( eqe( ( ) => { }, ( ) => { } ), true );
		} );

	} );


	describe( "`eqe( Array, 'Array' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( Array, "Array" ), false );
		} );
	} );


	describe( "`eqe( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( function hello( ){ return "hello" }, function hello( ){ return "hi" } ), false );
		} );
	} );


	describe( "`eqe( 123, 456 )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( 123, 456 ), false );
		} );
	} );


} );

//: @end-server

//: @client:

describe( "eqe", ( ) => {

	describe( "`eqe( function( ){ }, function( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( function( ){ }, function( ){ } ), true );
		} );
	} );


	describe( "`eqe( Array, Array )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( Array, Array ), true );
		} );
	} );


	describe( "`eqe( null, null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( null, null ), true );
		} );
	} );


	describe( "`eqe( undefined, undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( undefined, undefined ), true );
		} );
	} );


	describe( "`eqe( Symbol.for( 'hello' ), Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			assert.equal( eqe( Symbol.for( "hello" ), Symbol.for( "hello" ) ), true );
			//: @end-ignore
		} );
	} );


	describe( "`eqe( Symbol( 'hi' ).toString( ), Symbol( 'hi' ).toString( ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( eqe( Symbol( "hi" ).toString( ), Symbol( "hi" ).toString( ) ), true );
		} );
	} );


	describe( "`eqe( 0, '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( 0, "" ), false );
		} );
	} );


	describe( "`eqe( null, undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( null, undefined ), false );
		} );
	} );


	describe( "`eqe( { }, { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( { }, { } ), false );
		} );
	} );


	describe( "`eqe( [ ], [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( [ ], [ ] ), false );
		} );
	} );


	describe( "`eqe( ( ) => { }, ( ) => { } )`", ( ) => {

		it( "should be equal to true", ( ) => {
			assert.equal( eqe( ( ) => { }, ( ) => { } ), true );
		} );

	} );



	describe( "`eqe( Array, 'Array' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( Array, "Array" ), false );
		} );
	} );


	describe( "`eqe( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( function hello( ){ return "hello" }, function hello( ){ return "hi" } ), false );
		} );
	} );


	describe( "`eqe( 123, 456 )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( eqe( 123, 456 ), false );
		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "eqe", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`eqe( function( ){ }, function( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( function( ){ }, function( ){ } ) );
			assert.equal( result.value, true );
		} );
	} );


	describe( "`eqe( Array, Array )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( Array, Array ) );
			assert.equal( result.value, true );
		} );
	} );


	describe( "`eqe( null, null )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( null, null ) );
			assert.equal( result.value, true );
		} );
	} );


	describe( "`eqe( undefined, undefined )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( undefined, undefined ) );
			assert.equal( result.value, true );
		} );
	} );


	describe( "`eqe( Symbol.for( 'hello' ), Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( Symbol.for( "hello" ), Symbol.for( "hello" ) ) );
			assert.equal( result.value, true );
			//: @end-ignore
		} );
	} );


	describe( "`eqe( Symbol( 'hi' ).toString( ), Symbol( 'hi' ).toString( ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( Symbol( "hi" ).toString( ), Symbol( "hi" ).toString( ) ) );
			assert.equal( result.value, true );
			//: @end-ignore
		} );
	} );


	describe( "`eqe( 0, '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( 0, "" ) );
			assert.equal( result.value, false );
		} );
	} );


	describe( "`eqe( null, undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( null, undefined ) );
			assert.equal( result.value, false );
		} );
	} );


	describe( "`eqe( { }, { } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( { }, { } ) );
			assert.equal( result.value, false );
		} );
	} );


	describe( "`eqe( [ ], [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( [ ], [ ] ) );
			assert.equal( result.value, false );
		} );
	} );


	describe( "`eqe( ( ) => { }, ( ) => { } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( ( ) => { }, ( ) => { } ) );
			assert.equal( result.value, true );
		} );
	} );


	describe( "`eqe( Array, 'Array' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( Array, "Array" ) );
			assert.equal( result.value, false );
		} );
	} );


	describe( "`eqe( function hello( ){ return 'hello' }, function hello( ){ return 'hi' } )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( function hello( ){ return "hello" }, function hello( ){ return "hi" } ) );
			assert.equal( result.value, false );
		} );
	} );


	describe( "`eqe( 123, 456 )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute( ( ) => eqe( 123, 456 ) );
			assert.equal( result.value, false );
		} );
	} );

} );

//: @end-bridge
