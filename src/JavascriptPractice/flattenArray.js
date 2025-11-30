const array = [1,2,3,[1,2],[[1,2]],[3,4]];

function flatten(arr) {
  let result = [];
  
  arr.forEach((item) =>
    Array.isArray(item)
      ? result.push(...flatten(item))   // recursion
      : result.push(item)
  );

  return result;
}

console.log(flatten(array));
