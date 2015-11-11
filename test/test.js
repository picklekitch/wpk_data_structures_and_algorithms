var arrMethods = require(__dirname + '/../array_methods');
var expect = require('chai').expect;

describe('the array methods module', function() {

  it('push should add one or more elements onto the end of a array and return the new length', function() {
    var myArray = [1, 2, 3, 4, 5];
      var expectedArray = [1, 2, 3, 4, 5, 7, 8];
      expect(arrMethods.push(myArray, 7, 8)).to.equal(myArray.length);
      expect(myArray.length).to.equal(7);
      for(var i=0; i<myArray.length; i++) {
        expect(myArray[i]).to.equal(expectedArray[i]);
      }
    });

  it('pop should remove the last element from an array and return that element', function() {
      var myArray = [1, 2, 3, 4, 5];
      var expectedArray = [1, 2, 3, 4];
      expect(arrMethods.pop(myArray)).to.equal(5);
      expect(myArray.length).to.equal(4);
      for(var i=0; i<myArray.length; i++) {
        expect(myArray[i]).to.equal(expectedArray[i]);
      }
    });

    it('shift should remove the first element of an array and return that element', function() {
      var myArray = [1, 2, 3, 4, 5];
      var expectedArray = [2, 3, 4, 5];
      expect(arrMethods.shift(myArray)).to.equal(1);
      expect(myArray.length).to.equal(4);
      for(var i=0; i<myArray.length; i++) {
        expect(myArray[i]).to.equal(expectedArray[i]);
      }
    });

    it('unshift should add one or more elements to the beginning of an array return the new length', function() {
      var myArray = [1, 2, 3, 4, 5];
      var expectedArray = [6, 7, 8, 1, 2, 3, 4, 5];
      expect(arrMethods.unshift(myArray, 6, 7, 8)).to.equal(myArray.length);
      expect(myArray.length).to.equal(8);
      for(var i=0; i<myArray.length; i++) {
        expect(myArray[i]).to.equal(expectedArray[i]);
      }
    });

    it('unique should be passed an array and return a copy of that array with the duplicates removed', function() {
      var myArray = [1, 2, 2, 3, 3, 3, 4, 5];
      var expectedArray = [1, 2, 3, 4, 5];
      var uniqueArray = arrMethods.unique(myArray);
      expect(uniqueArray.length).to.equal(5);
      for(var i=0; i<myArray.length; i++) {
        expect(uniqueArray[i]).to.equal(expectedArray[i]);
      }
    });

    it('frequency2 should be passed an array of words and return the letter which occurs the most times in the entire array', function() {
      var wordArray = ['test', 'test', 'test', 'ooooo'];
      expect(arrMethods.frequency2(wordArray)).to.equal('t');
    });
});
