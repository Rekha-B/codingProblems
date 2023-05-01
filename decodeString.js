const str1 = "3[a]2[bc]";
const str2 = "3[a2[c]]";
const str3 = "2[abc]3[cd]ef";

const decodeString = (str) => {
    const stringStack = [];
    const numStack = [];

    for(let char of str){
        if(!isNaN(char)){
            numStack.push(char);
        }
        else if(char === '['){
            stringStack.push(char);
        }
        else if(char === ']'){
            let temp = '';
            while(stringStack[stringStack.length - 1] !== '['){
                temp = stringStack.pop() + temp;
            }
            stringStack.pop();
            let num = numStack.pop();
            stringStack.push(temp.repeat(num));
        }
        else {
            stringStack.push(char);
        }
    }
    return stringStack.join('');
}

console.log(decodeString(str1)); // "aaabcbc"