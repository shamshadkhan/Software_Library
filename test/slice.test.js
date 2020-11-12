// node 12 and up
import chai from "chai"
import slice from "../src/slice.js"
const expect = chai.expect

const array = [1,2,3,4,5];

describe("slice Operation", () => {
    it("slice of array with only start index should return proper result", () =>{
        expect(slice(array,3)).to.eql([4,5]);
    });
    it("empty array should return empty array", () =>{
        expect(slice([],2,2)).to.eql([]);
    });
    it("slice of array with only start index should return empty array", () =>{
        expect(slice(array,-3,2)).to.eql([]);
    });
    it("slice of array with null start index should return array itself", () =>{
        expect(slice(array,null)).to.eql([1,2,3,4,5]);
    });
    it("null array with index start index should return empty array", () =>{
        expect(slice(null,2)).to.eql([]);
    });
    
})
