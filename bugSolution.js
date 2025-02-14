const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use try...catch to handle potential errors
  setTimeout(() => {
    try {
      const data = someAsynchronousOperation();
      res.send(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});

function someAsynchronousOperation() {
  // Simulate a random error condition
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return { message: 'Success!' };
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});