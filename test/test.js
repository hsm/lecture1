const rewire = require('rewire');
const expect = require("chai").expect;

//const app = require("../app/app");
const app = rewire('../app/app');

describe('Test Suite', function () {
  describe('Sanity test', function () {
    it('checks that true equals true', function () {
      expect(true).to.equal(true);
    });
  });

  const sanity = app.__get__('sanity');
  describe('Sanity test from app.js', function () {
    it('checks that true equals true', function () {
      expect(true).to.equal(sanity());
    });
  });
});