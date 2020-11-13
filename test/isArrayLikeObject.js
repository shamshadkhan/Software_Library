// node 12 and up
import chai from "chai"
import isArrayLikeObject from "../src/isArrayLikeObject.js"
const expect = chai.expect


describe("isArrayLikeObject Operation", () => {
    it("if value is null return false", () =>{
        expect(isArrayLikeObject(null)).to.equal(false)
    });
    it("if value is Function return false", () =>{
        expect(isArrayLikeObject(false)).to.equal(false)
    });
    it("if value is number return false", () =>{
        expect(isArrayLikeObject(1)).to.equal(false)
    });
    it("if value is array return true", () =>{
        expect(isArrayLikeObject([1, 2, 3])).to.equal(true)
    });
    it("if value is empty array return true", () =>{
        expect(isArrayLikeObject([])).to.equal(true)
    });
    it("if value is string return false", () =>{
        expect(isArrayLikeObject('abc')).to.equal(false)
    });
    it("if value is object return false", () =>{
        expect(isArrayLikeObject({ 'a': 1 })).to.equal(false)
    });
})
