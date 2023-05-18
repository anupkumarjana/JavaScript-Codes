const input1 = {a: 1, b: 2, c: 3, d: 10, e: 12};
const input2 = {a: 2, f: 6, d: 10, e: 12};

function findCommonKeyValuePairs(obj1, obj2) {
  const commonPairs = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      commonPairs[key] = obj1[key];
    }
  }

  return commonPairs;
}

const commonPairs = findCommonKeyValuePairs(input1, input2);
console.log(commonPairs);
