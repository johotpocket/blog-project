const posts = require('./posts');

module.exports = (app) => {
  app.get('/api/posts', posts.all);
  app.post('/api/posts', posts.create);
  app.post('/api/posts/:post_id/comment', posts.createComment);
  app.get('/api/posts/:post_id', posts.getOne);
  app.delete('/api/posts/:post_id', posts.adios);
  app.put('/api/posts/:post_id', posts.edit);
};
