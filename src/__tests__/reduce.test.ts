import reduce from "../reduce";
import { accumulator, longest, longestString } from "../utillity_function";

describe("Reduce test", function() {
    it("should accumulate the sum of the numbers of an array", function() {
        expect(reduce(accumulator, [1,2,3,4])).toBe(10);
    });
    it("should return the length of the largest string", function() {
        expect(reduce(longest, ["Pepe","Juan","Alfonso"])).toBe(7);
    });
    it("should return the longest string", function() {
        expect(reduce(longestString, ["Pepe","Juan","Alfonso"],"")).toBe("Alfonso");
    });
});