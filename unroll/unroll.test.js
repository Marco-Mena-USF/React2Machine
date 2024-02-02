const { expect } = require('chai');

function runTests() {
  describe('unroll function', () => {
    it('should unroll a 4x4 square array in a spiral manner', () => {
      const square = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ];
      const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
      const result = unroll(square);
      expect(result).to.deep.equal(expected);
    });

    it('should unroll a 3x3 square array in a spiral manner', () => {
      const square = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
      const result = unroll(square);
      expect(result).to.deep.equal(expected);
    });

    it('should unroll a 2x2 square array in a spiral manner', () => {
      const square = [
        [1, 2],
        [3, 4]
      ];
      const expected = [1, 2, 4, 3];
      const result = unroll(square);
      expect(result).to.deep.equal(expected);
    });

    it('should unroll a 1x1 square array', () => {
      const square = [[1]];
      const expected = [1];
      const result = unroll(square);
      expect(result).to.deep.equal(expected);
    });

    it('should handle an empty square array', () => {
      const square = [];
      const expected = [];
      const result = unroll(square);
      expect(result).to.deep.equal(expected);
    });
  });
}

// Run the tests
runTests();