// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let result = []
  let groups = Math.ceil(arr.length / size)
  let counter = size;
  for(let i = 0; i < groups; i++) {
    let start = i * size
    let end = i * size + size
    result.push(arr.slice(start, end))
  }
  return result
  // console.log(result)
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)