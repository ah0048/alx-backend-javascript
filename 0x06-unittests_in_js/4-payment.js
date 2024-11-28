const Utilis = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utilis.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}
module.exports = sendPaymentRequestToApi;
