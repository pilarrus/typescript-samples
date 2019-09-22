import zipwith from "../zipwith";
import { add, pair} from "../utillity_function";

describe("Zipwith test", function() {
    it("add", function() {
        expect(zipwith(add, [1,2], [3,4,5])).toEqual([4, 6]);
    });
    it("max", function() {
        expect(zipwith(Math.max, [1,2], [3,4,5])).toEqual([3, 4]);
    });
    it("pair", function() {
        expect(zipwith(pair, [1,2], [3,4,5])).toEqual([ [ 1, 3 ], [ 2, 4 ] ]);
    });
});