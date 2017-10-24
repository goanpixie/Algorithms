/*Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".*/

var wordBreak = function(s, wordDict) {
  var results = [];
    if(wordDict.length ===0){
        return false;
    }

  var findCombos = function(current, pullFrom){
    if (pullFrom.length === 0){
      results.push(current.join(' '));
      return;
    }

    for (var i = 0; i < wordDict.length; i++){
      if (pullFrom.indexOf(wordDict[i]) === 0){
        current.push(wordDict[i]);
        findCombos(current, pullFrom.slice(wordDict[i].length));
        current.pop();
      }
    }
  }
  findCombos([], s);
    console.log(results)
  if(results.length){
      return true;
  }
    else{
        return false;
    }
};