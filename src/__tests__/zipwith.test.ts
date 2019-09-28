import { add, pair, max} from "../utillity_function";
import zipWith from "../zipWith";

describe("Zipwith test", function() {
    it("add", function() {
        expect(zipWith(add, [1,2], [3,4,5])).toEqual([4, 6]);
    });
    it("should pair arrays", function() {
        expect(zipWith(pair, [1, 2, 3], ["Pedro", "Ana"])).toEqual([
          [1, "Pedro"],
          [2, "Ana"]
        ]);
      });
      it("should pair and max arrays", function() {
        expect(zipWith(max, [1, 8, 3], [7, 2])).toEqual([7, 8]);
      });
});