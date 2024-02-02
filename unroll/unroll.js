function unroll(square) {
    const result = [];
  
    while (square.length > 0) {
      // Traverse top row from left to right
      result.push(...square.shift());
  
      // Traverse right column from top to bottom
      for (let i = 0; i < square.length; i++) {
        result.push(square[i].pop());
      }
  
      // Traverse bottom row from right to left
      if (square.length > 0) {
        result.push(...square.pop().reverse());
      }
  
      // Traverse left column from bottom to top
      for (let i = square.length - 1; i >= 0; i--) {
        result.push(square[i].shift());
      }
    }
  
    return result;
  }
  
  // Example usage:
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const unrolledArray = unroll(square);
  console.log(unrolledArray);