const arr = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']];
const arr1 = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']];

const numOfIslands = (arr) => {
    let countIslands = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j < arr[i].length;j++){
            if(arr[i][j] === '1'){
                countIslands++;
                transform(arr, i, j);
            }
        }
    }
    return countIslands;
}


const transform = (arr, i, j) => {
   if(!arr[i] || !arr[i][j] || arr[i][j] === '0') return;
   arr[i][j] = '0';
   transform(arr, i+1, j);
   transform(arr, i-1, j);
   transform(arr, i, j+1);
   transform(arr, i, j-1);

}
console.log(numOfIslands(arr)); // 1
console.log(numOfIslands(arr1)); // 3