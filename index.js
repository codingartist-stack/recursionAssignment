// fib for loop

function fibSeq(number) {
  let a = 0;
  let b = 1;
  let sequence = [a, b];

  if (number === 0) {
    sequence = [a];
  }
  if (number === 1) {
    sequence = [a, b];
  }

  for (let i = 0; i < number - 1; i++) {
    let c = a + b;

    sequence.push(c);

    a = b;
    b = c;
  }
  return sequence;
}

console.log(fibSeq(8));

// fib recursion

function fibRecursion(fibNumber) {
  if (fibNumber < 2) return fibNumber;

  return fibRecursion(fibNumber - 1) + fibRecursion(fibNumber - 2);
}

console.log(fibRecursion(8));

//merge sort

//merge sort is sorting each half and then merging the halves together

//break up the list(array) into smaller chunks then order them.
//compare the first index of each list to see which is smaller.

let mergeArray1 = [2, 8, 15, 18];

let mergeArray2 = [5, 9, 12, 17];

let mergedArrays = [];

//take half of the length of the array
//split the array at the half.

function merge(left, right) {
  let i = 0;
  let j = 0;
  let k = 0;
  let c = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      c[k++] = left[i++];
    } else c[k++] = right[j++];
  }

  for (; i < left.length; i++) c[k++] = left[i];

  for (; j < left.length; j++) c[k++] = right[j];

  return c;
}

console.log(merge(mergeArray1, mergeArray2));
