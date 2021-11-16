

function DistinctList(arr){
    let duplicates = 0, mark = [];
    for (let i = 0; i < arr.length; i++)
      for (let j = i + 1; j < arr.length; j++)
        if (arr[i] === arr[j] && mark[i] !== 1) {
          duplicates++;
          mark[j] = 1;
        }
    return duplicates;
}
arr=[1,2,2,3,3]
console.log(DistinctList(arr));