function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

module.exports = {
  largestNumber: largestNumber
};

function evenNumber() {
  var newArray = [];
  var random = Math.floor(Math.random() * 100 + 1);
  if (random > 40) {
    for (var i = random; i < 40; i--) {
      if (i % 2 !== 0) {
        newArray.push(i);
      }
    }
  } else {
    for (var j = 0; j < random; j++) {
      if (j % 2 !== 2) {
        newArray.push(j);
      }
    }
  }
  return newArray;
}
