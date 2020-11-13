// node 12 and up
import chai from "chai"
import drop from "../src/drop.js"
const expect = chai.expect

const array = [1,2,3,4,5];

describe("drop Operation", () => {
    it("return array after dropping 1 element when no drop count given", () =>{
        expect(drop(array)).to.eql([2,3,4,5]);
    });
    it("return array itself when drop count is 0", () =>{
        expect(drop(array,0)).to.eql(array);
    });
    it("return array after droppping n element when drop count > 0 and in array length range", () =>{
        expect(drop(array,4)).to.eql([5]);
    });
    it("return empty array when drop count > array length", () =>{
        expect(drop(array,6)).to.eql([]);
    });
    it("return empty array when array is null", () =>{
        expect(drop(null,2)).to.eql([]);
    });
    it("return array itself when drop count is negative", () =>{
        expect(drop(array,-2)).to.eql(array);
    });
    
})
