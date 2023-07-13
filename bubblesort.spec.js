describe('Bubble Sort', function(){
  it('Arreglo vacio retorne el mismo', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  it('Arreglo desordenado que retorne el mismo, pero ordenado', function(){
    expect(bubbleSort([3,1,4,2])).toEqual([1,2,3,4]);
  });
  it('Arreglo ordenado que retorne el mismo', function(){
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
  });
  it('Arreglo invertido que retorne el mismo, pero ordenado', function(){
    expect(bubbleSort([4,3,2,1]) ).toEqual([1,2,3,4]);
  }); 
});

describe('Swap', function() {
  it('En funcion al largo del arreglo cuantos pasos debe hacer la funcion swap ', function () {
    spyOn(window, "swap").and.callThrough();
    window.bubbleSort([4,3,2,1]);
    expect(window.swap.calls.count()).toEqual(6);
  });
});