var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../server');
var Post = require('../models/post');

chai.use(chaiHttp);

describe('/GET posts', () => {
  it('returns the posts', done => {
    chai.request(server).get('/api/posts').end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});

describe('/POST post', () => {
  it('will not create a new post without a title', done => {
    var post = {
      content: 'gutentag, test!'
    };

    chai.request(server).post('/api/posts').send(post).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('errors');
      res.body.errors.should.have.property('title');
      res.body.errors.title.should.have.property('kind').eql('required');
      done();
    });
  });

  it('should POST a new post', done => {
    var post = {
      content: 'Testing mocha',
      title: 'it be monday'
    };

    chai.request(server).post('/api/posts').send(post).end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('message').eql('post successfully added!');
      res.body.data.should.have.property('title');
      res.body.data.should.have.property('content');
      res.body.data.content.should.be.a('string');
      done();
    });
  });
});

describe('GET POST BY ID', () => {
  it('it should get POST by ID', done => {
    var post = new Post({
      content: 'burn with me martha',
      title: 'i would like a lager now, please'
    });

    post.save((err, post) => {
      chai
        .request(server)
        .get('/api/posts/' + post._id)
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('title');
          done();
        });
    });
  });
});

describe('EDIT A POST', () => {
  it('Can edit a post, if you have an ID', done => {
    var post = new Post({ title: 'bloggy', content: 'Hello' });
    post.save((err, post) => {
      chai
        .request(server)
        .put('/api/posts/' + post._id)
        .send({ title: 'Thirstsday' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Post Updated!');
          res.body.updatedPost.should.have
            .property('title')
            .eql('Thirstsday');
          done();
        });
    });
  });
});

describe('DELETE A POST', () => {
  it('Can delete a post by id', done => {
    var post = new Post({ title: 'Blog Blog', content: 'hey im a test' });
    post.save((err, post) => {
      chai.request(server).delete('/api/posts/' + post._id).end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });
});

// var chai = require('chai')
// var chaiHttp = require('chai-http')
// var should = chai.should();
// var server = require('../server');
//
// chai.use(chaiHttp);
//
// describe('/GET all posts', () => {
//   it('returns the homepage', function(done){
//     chai.request(server)
//     .get('/api/posts')
//     .end(function(err, res) {
//       res.should.have.status(200);
//       done();
//     })
//   })
// })
//
// describe('/POST posts', () => {
//   it('creation of a new post', function(done) {
//     var post = {
//       title: "imagination",
//       content: "blog blog"
//     }
//     chai.request(server)
//       .post('/api/posts')
//       .send(post)
//       .end(function(err, res) {
//         res.should.have.status(200)
//         done();
//     })
//   })
// })
//
// describe('/POST posts', () => {
//   it('creation of a new post', function(done) {
//     var post = {
//       title: "imagination",
//       content: "blog blog"
//     }
//     chai.request(server)
//       .post('/api/posts')
//       .send(post)
//       .end(function(err, res) {
//         res.should.have.status(200)
//         done();
//     })
//   })
// })
