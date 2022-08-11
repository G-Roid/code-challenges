function frankenSplice(arr1, arr2, n) {
  let copyArr1 = arr1.slice()
  let copyArr2 = arr2.slice()
  // result = arr1.splice(n, 0, arr2)

  // console.log(arr1)
  for(let i = 0; i < copyArr1.length; i++) {
    copyArr2.splice(n + i, 0, copyArr1[i])
  }
  // console.log(copyArr2)
  return copyArr2
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);