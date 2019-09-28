import { isOdd, not } from "../utillity_function";


describe("utillity_functions", function() {
    it("should double the array values", function() {
        expect(not(isOdd)(2)).toBe(true);
      });
});