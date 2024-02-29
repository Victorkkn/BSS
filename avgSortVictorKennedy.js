function avgSort(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  arr = [8, 1, 16, 5, 4, 9, 3, 2, 6]
  console.log(avgSort(arr))
  
  console.log('-----------------')
  
  arr = [8, 1, 16, 5, 2, 4, 9, 3, 2, 6]
  console.log(avgSort(arr))
  
  