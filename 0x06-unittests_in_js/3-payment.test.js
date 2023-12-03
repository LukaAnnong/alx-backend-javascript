const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const sinon = require('sinon');
const { calculateNumber } = require('./utils');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  beforeEach(() => {
    sinon.spy(Utils, 'calculateNumber');
  });
