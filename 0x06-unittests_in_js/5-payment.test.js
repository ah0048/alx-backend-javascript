const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('hooks', () => {
  let spyConsole;
  let stubUtils;

  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
    stubUtils = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spyConsole.restore();
    stubUtils.restore();
  });

  it('should call calculateNumber', () => {
    stubUtils.returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call calculateNumber', () => {
    stubUtils.returns(20);
    sendPaymentRequestToApi(10, 10);
    expect(stubUtils.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
