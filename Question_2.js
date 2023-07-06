const word = '00000111110101001111100001001';

let currentChainLength = 0;
let longestChainLength = 0;
//To find the longest chain of letters in a word, We can iterate over the characters of the word and keep 
//track of the current chain length and the longest chain length encountered so far. 

for (let i = 0; i < word.length; i++) {
  const char = word[i];
  
  if (char === '1') {
    // Increment the current chain length if the current character is '1'
    currentChainLength++;
    
    if (currentChainLength > longestChainLength) {
      // Update the longest chain length if the current chain length is greater
      longestChainLength = currentChainLength;
    }
  } else {
    // Reset the current chain length if the current character is '0'
    currentChainLength = 0;
  }
}

console.log('Longest chain of letters:', longestChainLength);
