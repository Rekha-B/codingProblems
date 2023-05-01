const n = 3;

const generate = (n) => {
   
    const solution = [];

    const generateParenthesis = (left, right, str) => {
        if(left > right) return;
        if(!left && !right) solution.push(str);
        if(left > 0) generateParenthesis(left - 1, right, str + '(');
        if(right > 0)generateParenthesis(left, right -1 , str + ')' );
    }

    generateParenthesis(n, n, '');
    return solution;
}

console.log(generate(n));