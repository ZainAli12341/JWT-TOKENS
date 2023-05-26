const request = require('supertest');
const {sighnUp,sighnIn}= require('../controllers/usercontrollers');


  describe('POST /signup', () => {
    test('should create a new user and return a JWT token', async () => {
      const response = await request(sighnUp)
        .post('/signup')
        .send({
          username: 'input dalain kro check',
          password: 'input dalain kro check',
          email: 'input dalain kro check',
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

   
  describe('POST /signin', () => {
    test('should return a JWT token for a valid user', async () => {
      const response = await request(sighnIn)
        .post('/signin')
        .send({
          email: 'input dalain kro check',
          password: 'input dalain kro check',
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    
    });
  });
});