exports.push = function(myArr) {
  for (var i=1; i<arguments.length; i++) {
    myArr[myArr.length] = arguments[i];
  }
  return myArr.length;
};

exports.pop = function(myArr) {
  var popped = myArr[myArr.length - 1];
  myArr.length--;
  return popped;
};

exports.shift = function(myArr) {
  var removed = myArr[0];
  for (var i=0; i<myArr.length-1; i++) {
    myArr[i] = myArr[i+1];
  }
  myArr.length--;
  return removed;
};

exports.unshift = function(myArr) {
  var oldLength = myArr.length;
  var numberOfItems = arguments.length - 1;
  for (var i=0; i<numberOfItems; i++) {
    myArr.length++;
  }
  for (i=1; i<oldLength+1; i++) {
    myArr[myArr.length - i] = myArr[myArr.length - i - numberOfItems];
  }
  for (i=0; i<numberOfItems; i++) {
    myArr[i] = arguments[i+1];
  }
  return myArr.length;
};

exports.unique = function(myArr) {
  var uniqArr = [];
  var alreadyInUniq;

  for (i=0; i<myArr.length; i++) {
    alreadyInUniq = false;
    for (j=0; j<uniqArr.length; j++) {
      if (myArr[i] == uniqArr[j]) alreadyInUniq = true;
    }
    if (!alreadyInUniq) {
      uniqArr[uniqArr.length] = myArr[i];
    }
  }
  return uniqArr;
};

exports.frequency2 = function(wordArr) {

  function unique(myArr) {
    var uniqArr = [];
    var alreadyInUniq;

    for (i=0; i<myArr.length; i++) {
      alreadyInUniq = false;
      for (j=0; j<uniqArr.length; j++) {
        if (myArr[i] == uniqArr[j]) alreadyInUniq = true;
      }
      if (!alreadyInUniq) {
        uniqArr[uniqArr.length] = myArr[i];
      }
    }
    return uniqArr;
  }

  function setLetterCounts(myArr, letterCounts) {
    var uniqArr = [];
    var alreadyInUniq;

    for (i=0; i<myArr.length; i++) {
      alreadyInUniq = false;
      for (j=0; j<uniqArr.length; j++) {
        if (myArr[i] == uniqArr[j]) {
          alreadyInUniq = true;
          letterCounts[j]++;
        }
      }
      if (!alreadyInUniq) {
        uniqArr[uniqArr.length] = myArr[i];
      }
    }
    return letterCounts;
  }

  var string = '';
  for (var i=0; i<wordArr.length; i++) {
    string += wordArr[i];
  }

  var letterArr = [];
  for (i=0; i<string.length; i++) {
    letterArr.push(string[i]);
  }

  var uniqLetters = unique(letterArr);

  letterCounts = [];
  for (i=0; i<uniqLetters.length; i++) {
    letterCounts.push(1);
  }
  letterCounts = setLetterCounts(letterArr, letterCounts);

  var highest = 1;
  var indexOfHighest = 0;
  for (i=0; i<letterCounts.length; i++) {
    if (letterCounts[i] > highest) {
      highest = letterCounts[i];
      indexOfHighest = i;
    }
  }

  return uniqLetters[indexOfHighest];
};
