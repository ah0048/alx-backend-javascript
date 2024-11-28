const request = require('request');
const { expect } = require('chai');

describe('integration Testing', () => {
  describe('gET /', () => {
    it('code: 200 | Body: Welcome to the payment system', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    }));
  });
});
