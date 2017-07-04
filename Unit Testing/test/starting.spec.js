const assert = require('assert');
const should = require('chai').should();

describe('Basic mocha Test', function() {
    it('should deal with objects', function() {
        let obj = { name: 'Doroteya', gender: 'male' };
        let objB = { name: 'Doroteya', gender: 'male' };

        obj.should.deep.equal(objB);

    });

    it('should allow testing nulls', function() {
        const iAmNull = null;
        should.not.exist(iAmNull);

    })
});