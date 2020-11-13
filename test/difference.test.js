// node 12 and up
import chai from "chai"
import difference from "../src/difference.js"
const expect = chai.expect


describe("difference Operation", () => {
    it("return elements of 1st array not found in 2nd array", () =>{
        expect(difference([2,3],[2,1])).to.eql([3])
    });
    it("return empty array if both array is same", () =>{
        expect(difference([2,3],[2,3])).to.eql([])
    });
    it("return empty array if 1st array is string", () =>{
        expect(difference(3,[1,4])).to.eql([])
    });
})
