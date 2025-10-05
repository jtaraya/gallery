<<<<<<< HEAD
process.env.NODE_ENV = 'test';

var chai = require('chai');
const chaiHttp = require('chai-http');
var server = require('../server'); 

=======
process.env.NODE_ENV = 'test';   

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server');
>>>>>>> 18ece3ba0c11375ef695f05c8c5c46d1e83b4531
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

<<<<<<< HEAD
describe('Photos', function() {
    it('should list ALL photos on / GET', function(done) {
        this.timeout(60000);
        chai.request(server)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
});
=======
describe('Photos', function(){


    it('should list ALL photos on / GET', function(done){
        this.timeout(60000);
        chai.request(server)
        .get('/')
        .end(function(err,res){
            res.should.have.status(200);
            res.should.be.html;
            res.body.should.be.a('object')
            done();
        })
    });
})
>>>>>>> 18ece3ba0c11375ef695f05c8c5c46d1e83b4531
