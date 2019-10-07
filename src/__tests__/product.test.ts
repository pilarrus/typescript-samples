import { product } from "../product";

describe("Product tests", function() {
  it("should double the array values", function() {
    expect(product([1, 2, 3],["a", "b", "c"]).toEqual(["1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c",]);
  });
});