// node 12 and up
import chai from "chai"
import isTypedArray from "../src/isTypedArray.js"
const expect = chai.expect


describe("isTypedArray Operation", () => {
    it("if value is null return false", () =>{
        expect(isTypedArray(null)).to.equal(false)
    });
    it("if value is Function return false", () =>{
        expect(isTypedArray(false)).to.equal(false)
    });
    it("if value is number return false", () =>{
        expect(isTypedArray(1)).to.equal(false)
    });
    it("if value is array return false", () =>{
        expect(isTypedArray([1, 2, 3])).to.equal(false)
    });
    it("if value is empty array return false", () =>{
        expect(isTypedArray([])).to.equal(false)
    });
    it("if value is string return false", () =>{
        expect(isTypedArray('abc')).to.equal(false)
    });
    it("if value is object return false", () =>{
        expect(isTypedArray({ 'a': 1 })).to.equal(false)
    });
    it("if value is typedobject return true", () =>{
        expect(isTypedArray(new Uint8Array)).to.equal(true)
    });
})
