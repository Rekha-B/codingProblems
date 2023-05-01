const input = 876;

const reverseInt = (num) => {
   let reversed = 0;
   while(num > 0) {
      reversed = reversed * 10 + ( num % 10 );
      num = Math.floor(num /10) ;
   }
   return reversed;
}

console.log(reverseInt(input));