//your JS code here. If required.
const output = document.getElementById("output");

const numbers = [1, 2, 3, 4];

// Function to create a delay
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Initial promise - resolves after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers);
    }, 3000);
  });
}

// Promise chaining
getNumbers()
  .then((array) => {
    // Filter even numbers
    const evenNumbers = array.filter((num) => num % 2 === 0);

    return delay(1000).then(() => {
      // Display [2,4]
      output.textContent = evenNumbers;
      return evenNumbers;
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2
    const doubledNumbers = evenNumbers.map((num) => num * 2);

    return delay(2000).then(() => {
      // Display [4,8]
      output.textContent = doubledNumbers;
    });
  });