function split(wholeArray) {
  let nuevoArr = Math.floor(wholeArray.length / 2);
  const firstHalft = wholeArray.slice(0, nuevoArr);
  const secondHalf = wholeArray.slice(nuevoArr);

  return [firstHalft, secondHalf];
}

function merge(arr1, arr2) {
  var arrOrdenado = []
  while(arr1.length && arr2.length){
    if(arr1[0] < arr2[0]){
      arrOrdenado.push(arr1.shift())
    }else{
      arrOrdenado.push(arr2.shift())
    }
  }
  return [...arrOrdenado, ...arr1, ...arr2]
}

function mergeSort(array) {
  if(array.length === 1){
    return array
  }
  var [firstHalf, secondHalf] = split(array)
  var fnFirstHalf = mergeSort(firstHalf)
  var fnSecondHalf = mergeSort(secondHalf)

  return merge(fnFirstHalf, fnSecondHalf)
}