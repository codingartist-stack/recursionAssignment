// FIB FOR LOOP

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

//console.log(fibSeq(8));

// FIB RECURSION

function fibRecursion(fibNumber) {
  if (fibNumber < 2) return fibNumber;

  return fibRecursion(fibNumber - 1) + fibRecursion(fibNumber - 2);
}

//console.log(fibRecursion(8));

//MERGE SORT

let mergeArray1 = [2, 8, 15, 18, 5, 9, 12, 17, 22];

// let mergeArray2 = [5, 9, 12, 17];

function merge(left, right) {
  let i = 0;
  let j = 0;
  let k = 0;
  let c = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      c[k] = left[i];
      i++;
    } else {
      c[k] = right[j];
      j++;
    }
    k++;
  }

  for (; i < left.length; i++) {
    c[k] = left[i];
    k++;
  }

  for (; j < left.length; j++) {
    c[k] = right[j];
    k++;
  }

  return c;
}

function mergeSort(array) {
  //get the half of the length
  //split the array in half from 0 to half and half to end

  if (array.length < 2) return;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  console.log(left);
  console.log(right);
}

mergeSort(mergeArray1);
