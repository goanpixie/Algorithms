/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

function letterCombinations(digits) {
    var map = [];
    map[2]="abc";
    map[3]="def";
    map[4]="ghi";
    map[5]="jkl";
    map[6]="mno";
    map[7]="pqrs";
    map[8]="tuv";
    map[9]="wxyz";
    map[0]="";
    
    var result=[];
    if(digits ==null ||digits.length==0)
        return result;
    var temp=[];
    getString(digits,temp,result,map);
    return result;
};

function getString(digits,temp,result,map){
    if(digits.length ==0){
        var arr=[];
        for(var i=0;i<temp.length;i++){
            arr[i]=temp[i];
        }
        result.push(arr.join(""));
        return;
    }
    
    var curr = parseInt(digits.substring(0,1));
    var letters=map[curr];
    for(var i=0;i<letters.length;i++){
        temp.push(letters.charAt(i));
        getString(digits.substring(1),temp,result,map);
        temp.pop();
    }
}