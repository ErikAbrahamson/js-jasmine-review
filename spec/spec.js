var code = require('../js/main.js');
var empty, checkEvenness;

beforeEach(function() {
  var empty = [];
  var checkEvenness = function(n) {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
});

describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([1, 20, 3])).toBe(20);
    expect(code.largestNumber([-1, -20, -3])).not.toBe(-20);
  });
});

describe('Problem 2', function() {
  it('should generate a random number, returning an array of odd numbers to or from 40', function() {
    expect(code.oddNumber()).not.toBe(empty);
  });
});

describe('even number function', function() {
  it('should count from 0 to the random number with even ints', function() {
    expect(code.evenNumber()).not.toBe(empty);

  });
});
