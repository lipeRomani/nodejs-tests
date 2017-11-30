const request = require('supertest');
const app = require('./server');
const expect = require('expect');

describe('Server', () => {
  describe('GET /', () => {
    it('Should return Hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body)
            .toInclude({
              error : 'Page not found',
              name: 'Todo app 1.0v'
            })
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('Should have felipe in collection', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body)
            .toInclude({
              name: 'Felipe',
              age: 30
            })
        })
        .end(done);
    })
  })
});
