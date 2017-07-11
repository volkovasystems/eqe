const assert = require( "assert" );
const eqe = require( "./eqe.js" );

assert.equal( eqe( 0, 0 ), true, "should return true" );

assert.equal( eqe( function( ){ }, function( ){ } ), true, "should be true" );

assert.equal( eqe( Array, Array ), true, "should return true" );

assert.equal( eqe( null, null ), true, "should be true" );

assert.equal( eqe( Symbol.for( "hello" ), Symbol.for( "hello" ) ), true, "should be true" );

assert.equal( eqe( 0, "0" ), false, "should return false" );

assert.equal( eqe( 0, "" ), false, "should return false" );

assert.equal( eqe( null, undefined ), false, "should return false" );

assert.equal( eqe( { }, { } ), false, "should be false" );

assert.equal( eqe( [ ], [ ] ), false, "should be false" );

assert.equal( eqe( ( ) => { } ), false, "should be false" );

assert.equal( eqe( Array, "Array" ), false, "should return false" );

assert.equal( eqe( function hello( ){ return "hello" }, function hello( ){ return "hi" } ), false, "should return false" );

assert.equal( eqe( 123, 456 ), false, "should be false" );

assert.equal( eqe( Symbol( "hi" ), Symbol( "hi" ) ), false, "should be false" );

console.log( "ok" );
