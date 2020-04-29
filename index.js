function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0

  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      minIndex = i
    };
  }
  return array.splice(minIndex, 1)
}

function insertionSort(array){
  let sortedArray = [];
  let newMin;

  while(array.length != 0){
    newMin = findMinAndRemove(array);
    sorted.push(newMin);
  }
  return sortedArray
}
