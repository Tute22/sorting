function bubbleSort(array){
  if(array === []){
    return []
  }
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j + 1]){
        swap(array,j)
      }
    }
  }
  return array
}

function swap(array, index){  
  var aux = array[index]
  array[index] = array[index + 1]
  array[index + 1] = aux 
}