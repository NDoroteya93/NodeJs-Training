// syntxx

const { expect } = require('chai');

const getValueAfter = (value, seconds) => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(value), seconds + 1000);
    });
}

describe('Test sum', () => {
    // Once, before all tests in this describe
    before(() => {
        console.log('--- Before all ---');
    });

    // Once, after all test in this describe
    after(() => {
        console.log('--- After all ---');
    });

    // before each test in this describe 
    beforeEach(() => {
        console.log('--- Before each ---');
    });

    // after each test in this describe
    afterEach(() => {
        console.log('--- After each ---');
    });

    describe('Async tests', () => {
        it('with return promise', () => {
            getValueAfter(5, 1)
                .then((value) => {
                    expect(value).to.equal;
                });
        });
        it('with done()', () => {
            expect(5).not.to.be.null;

        });
    });

    describe.skip('Neted', () => {
        it('should return 4', () => {
            // Arange
            const x = 2;
            const y = 2;

            // Act
            const expected = x + y;

            // Assert
            expect(expected).to.eq(4);
        });


        it('should return 4 again', () => {
            // Arange
            const x = 2;
            const y = 2;

            // Act
            const expected = x + y;

            // Assert
            expect(expected).to.eq(6);
        });
    });
});