const assert = require('assert');
const authController = require('../../controllers/auth.controller');
const expect = require('chai').expect;
const should = require('chai').should();

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function() {

    beforeEach(function settinguUpRoles() {
        console.log('running before each');
        // authController.setRoles(['user']);
    });

    describe('isAuthorized', function() {

        it('Should return false if not authorized', function() {

            let isAuth = authController.isAuthorized('admin');
            isAuth.isAuthorized.calledOnce.should.be.true;
            expect(isAuth).to.be.false;
        });

        it('Should return true if authorized', function() {
            // admin is not part of the user role, so fail
            authController.setRoles(['user', 'admin']);
            let isAuth = authController.isAuthorized('admin');
            console.log(isAuth.isAuthorized);
            isAuth.should.be.true;
        });
        // pending tests
        it('Should not allow a get if not authorized');
        it('Shoud allow get if authorized!');
    });

    describe('isAuthorizedAsync', function() {

        it('Should return false if not authorized', function(done) {
            authController.isAuthorizedAsync('admin',
                function(isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });
        });
    });

    describe('isAuthorizedPromise', function() {

        it('Should return false if not authorized', function() {
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        });
    });

    describe.only('getIndex', function() {
        let user = {};

        beforeEach(function() {
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
        });
        it('should render index if authorized', function() {
            let isAuth = sinon.stub(user, 'isAuthorized').returns(true);
            let req = { user: user };
            let res = {
                render: function() {}
            };
            let mock = sinon.mock(res);
            // expect something to happen
            mock.expects('render').once().withExactArgs('index');
            authController.getIndex(req, res);
            isAuth.calledOnce.should.be.true;

            mock.verify();
        })
    })
})