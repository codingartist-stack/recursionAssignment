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
