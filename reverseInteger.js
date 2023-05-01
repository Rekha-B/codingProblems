const input = -123;
const input1 = 120;

const reverseInt = (num) => {
   let reversed = Math.abs(num).toString().split('').reverse().join('');
   return reversed > 2**31-1 ? 0 : Math.sign(num) * reversed;

}

console.log(reverseInt(input));

console.log(reverseInt(input1));