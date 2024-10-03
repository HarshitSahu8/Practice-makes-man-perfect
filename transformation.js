const obj = [
  {
    key: "SAMPLE 1",
    data: "DATA1",
  },
  {
    key: "SAMPLE 1",
    data: "DATA1",
  },
  {
    key: "SAMPLE 2",
    data: "DATA2",
  },
  {
    key: "SAMPLE 1",
    data: "DATA2",
  },
  {
    key: "SAMPLE 3",
    data: "DATA3",
  },
  {
    key: "SAMPLE 4",
    data: "DATA4",
  },
];
/**
  * 
  * OUTPUT: {
  * 'SAMPLE 1' : [{
    key: "SAMPLE 1",
    data: "DATA1",
  },{
    key: "SAMPLE 1",
    data: "DATA1",
  },{
    key: "SAMPLE 1",
    data: "DATA1",
  }]
    "SAMPLE 3":[]
  * }
  */

let output = {};

obj.forEach((objItem) => {
    if(output[objItem.key]) {
        output[objItem.key].push(objItem)
    }else{
        output[objItem.key] = [{
            ...objItem,
        }]
        
    }
})

// sol via reduce method


console.log(output)