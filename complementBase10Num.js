//Q:For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.

function calculate_bitwise_complement(n) {

    // TODO: Write your code here
    /*
    XOR rules:
    1^1 || 0^0= 0
    0^number = number
1^0 || 0^1 = 1
hence:
100^011=111
number^complement = all_bit_set
multiply with number of both sides
number^number^complement = number^all_bits_set
0^complement = number^all_bits_set
complement = number^all_bits_set
*/

//first calculate all bits reqiuired to stored number:
let bitCount = 0;
let num1 = n
while(num1>0){
  bitCount++;
  num1 = num1>>1;
}

let all_bit_set= Math.pow(2,bitCount)-1



return n^all_bit_set;
}

console.log(`Bitwise complement is: ${calculate_bitwise_complement(8)}`);
console.log(`Bitwise complement is: ${calculate_bitwise_complement(10)}`);