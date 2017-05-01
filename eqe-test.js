const assert = require( "assert" );
const eqe = require( "./eqe.js" );

assert.equal( eqe( function(){}, function(){} ), true, "should be true" );
assert.equal( eqe( 123, 456 ), false, "should be false" );

console.log( "ok" );
