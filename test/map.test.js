// node 12 and up
import chai from "chai"
import map from "../src/map.js"
const expect = chai.expect

//function to use for map
function square(n) {
  return n * n
}

describe("map Operation", () => {
    it("integer array should be mapped to array of square", () =>{
        const arr = [1,2,3]
        expect(map(arr,square)).to.eql([1, 4, 9]);
    });
    it("float array should be mapped to array of square and be deep equal", () =>{
        const arr = [1.1,2.1,3.1]
        expect(map(arr,square)).to.not.eql([1.21, 4.41, 9.61]);
    });
    it("string integer array should be mapped to array of square and not be string", () =>{
        const arr = ["1","2","3"]
        expect(map(arr,square)).to.eql([1, 4, 9]);
    });
})
