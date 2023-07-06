var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

var duplicatesNumbers = [];
var sameNumbers = [];

// To Find duplicates from given array
for (var i = 0; i < fullWordList.length; i++) {
  var word = fullWordList[i];
  if (wordsToRemove.includes(word)) {
    duplicatesNumbers.push(word);
  }
}

// To Find same Numbers from given array
for (var j = 0; j < fullWordList.length; j++) {
  var word2 = fullWordList[j];
  if (wordsToRemove.includes(word2) || duplicatesNumbers.includes(word2)) {
    sameNumbers.push(word2);
  }
}

console.log('Duplicates:', duplicatesNumbers); // Output: ['1', '2', '3']
console.log('Same Values:', sameNumbers); // Output: ['1', '2', '3']
