const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    // #1
    test('#1 Test GET /api/convert with 10L', (done) => {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=10L')
            .end((err, res) => {
                let responseObject = JSON.parse(res.text);
                assert.equal(res.status, 200);
                assert.equal(responseObject.returnNum, 2.64172);
                assert.equal(responseObject.returnUnit, 'gal');
                done();
            })
    })
    // #2
    test('#2 Test GET /api/convert with invalid input 32g', (done) => {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=32g')
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'invalid unit');
                done();
            })
    })
    // #3
    test('#3 Test GET /api/convert with invalid number 3/7.2/4kg', (done) => {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=3/7.2/4kg')
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'invalid number');
                done();
            })
    })
    // #4
    test('#4 Test GET /api/convert with invalid number and unit, 3/7.2/4kilomegagram', (done) => {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=3/7.2/4kilomegagram')
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'invalid number and unit');
                done();
            })
    })
    // #5
    test('#5 Test GET /api/convert with no number, e.g. "kg"', (done) => {
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=kg')
            .end((err, res) => {
                let responseObject = JSON.parse(res.text);
                assert.equal(res.status, 200);
                assert.equal(responseObject.initNum, 1);
                assert.equal(responseObject.returnUnit, 'lbs');
                done();
            })
    })
});
