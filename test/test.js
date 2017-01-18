const expect = require("chai").expect;
const app = require("../app/app");

describe('Test Suite', function () {
  describe('Sanity test', function () {
    it('checks that true equals true', function () {
      expect(true).to.equal(true);
    });
  });
});