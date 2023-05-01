const arr = [2, 7, 11, 15];
const target = 9;

const twoSum = (arr, target) => {
     const map = new Map();
     for(let i=0;i<arr.length;i++){
        const complement = target - arr[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(arr[i], i);
     }
};

console.log(twoSum(arr, target)); // [0, 1]