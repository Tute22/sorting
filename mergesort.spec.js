describe("Split", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3],[4, 5, 6],]);
    expect(split([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3],[4, 5, 6, 7],]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 2, 3], [4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("Merge Sort", function () {
  it("desarmar el Arreglo y luego armarlo ordenadamente", function () {
    expect(mergeSort([5,6,2,1,4,3])).toEqual([1,2,3,4,5,6])
    expect(mergeSort([5,6,2,1,4,3,7])).toEqual([1,2,3,4,5,6,7])
  });
});