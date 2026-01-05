function positiveCumulativeSum(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(i===0){
            res.push(arr[i])
        }else{
            res.push(res[res.length-1]+arr[i])
        }
    }
    return res
}



// test program for real function
// Initial Array: [1, -2, 3, 4, -6]
// Cumulative Sum: [1, -1, 2, 6, 0]
// Initial Array: [1, -1, -1, -1, 1]
// Cumulative Sum: [1, 0, -1, -2, -1]
// Initial Array: [1, 3, 5, 7]
// Cumulative Sum: [1, 4, 9, 16]
function test(){
    // test 1
    const initArr = [[1, -2, 3, 4, -6],
   [1, -1, -1, -1, 1],
    [1, 3, 5, 7]
    ]
    const outArr = [
        [1, -1, 2, 6, 0],
        [1, 0, -1, -2, -1],
        [1, 4, 9, 16]
        ]
        
for (let i=0;i<initArr.length;i++){
    const res = positiveCumulativeSum(initArr[i]);
    if(!Array.isArray(res)){
        console.log('res not in array')
        return;
    }
    
    if(res.length !== outArr[i].length){
         console.log('res size not same')
        return;
    }
    
    for(let j=0;j<=res.length;j++){
        if(outArr[i][j] !== res[j]){
            throw error('Result not same')
        }
    }
}
    console.log("All test case pass")
}
test()
