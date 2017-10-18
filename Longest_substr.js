//Given a string S and a set of words D, find the longest word in D that is a subsequence of S.

// Word W is a subsequence of S if some number of characters, possibly zero, can be deleted from S to form W, without reordering the remaining characters.

// Note: D can appear in any format (list, hash table, prefix tree, etc.

// For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} the correct output would be "apple"

// The words "able" and "ale" are both subsequences of S, but they are shorter than "apple".
// The word "bale" is not a subsequence of S because even though S has all the right letters, they are not in the right order.
// The word "kangaroo" is the longest word in D, but it isn't a subsequence of S.

// What is Big O of your solution?
// Can you make it better?



//Solution1:
function findIndex(string, letter) {
  let index = 0
  let split = string.split("")
  index = split.findIndex( e => {
    return e === letter
  })
  return index
  
}



function isSub(string, word) {
  if (word.length === 0) {
    return true
  }
  
  let index = findIndex(string, word[0])
  
  if (index >= 0) {
    return true && isSub(string.slice(index + 1), word.slice(1)) // O(word.length)
  } else {
    return false
  }
}


function longestSub(string, words) {
  let longest = ""
  // Loop through each word, O(words) * O(word.length) * O(string.length)
  words.forEach( word => {
    if (isSub(string, word) && word.length > longest.length) {
      longest = word
    }
  })
  return longest.length > 0 ? longest : "There are no subs"
}

console.log(longestSub("abppplee", ["able", "ale", "apple", "bale", "kangaroo", "abpplee"]))