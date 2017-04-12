var chai = require('chai')
var chaiHttp = require('chai-http')
var should = chai.should();
var server = require('../server');

chai.use(chaiHttp);

describe('/GET all posts', () => {
  it('returns the homepage', function(done){
    chai.request(server)
    .get('/api/posts')
    .end(function(err, res) {
      res.should.have.status(200);
      done();
    })
  })
})

describe('/POST posts', () => {
  it('creation of a new post', function(done) {
    var post = {
      title: "imagination",
      content: "blog blog"
    }
    chai.request(server)
      .post('/api/posts')
      .send(post)
      .end(function(err, res) {
        res.should.have.status(200)
        done();
    })
  })
})

describe('/POST posts', () => {
  it('creation of a new post', function(done) {
    var post = {
      title: "imagination",
      content: "blog blog"
    }
    chai.request(server)
      .post('/api/posts')
      .send(post)
      .end(function(err, res) {
        res.should.have.status(200)
        done();
    })
  })
})
