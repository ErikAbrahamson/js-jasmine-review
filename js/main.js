module.exports = {
  largestNumber: function(arr){
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  },
  oddNumber: function(random) {
    var newArray = [];
    if (random > 0 && random < 100) {
      if (random > 40) {
        for (var i = random; i > 40; i--) {
          if (i % 2 !== 0) {
            newArray.push(i);
          }
        }
      } else {
        for (var j = random; j < 40; j++) {
          if (j % 2 !== 0) {
            newArray.push(j);
          }
        }
      }
    return newArray;
    }
  },
  evenNumber: function(random) {
    var newArray = [];
    if (random > 0 && random < 100) {
      for (var i = 0; i < random; i++) {
        if (i % 2 === 0) {
          newArray.push(i);
        }
      }
      return newArray;
    }
  },
  randomSum: function(random) {
    var sum = 0;
    var digits = random.toString();
    for (var i = 0; i < digits.length; digits++) {
      sum += +digits[i];
    }
    return sum;
  }
};
