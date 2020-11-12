// node 12 and up
import chai from "chai"
import isArrayLike from "../src/isArrayLike.js"
const expect = chai.expect


describe("isArrayLike Operation", () => {
    it("if value is null return false", () =>{
        expect(isArrayLike(null)).to.equal(false)
    });
    it("if value is Function return false", () =>{
        expect(isArrayLike(false)).to.equal(false)
    });
    it("if value is number return false", () =>{
        expect(isArrayLike(1)).to.equal(false)
    });
    it("if value is array return true", () =>{
        expect(isArrayLike([1, 2, 3])).to.equal(true)
    });
    it("if value is empty array return true", () =>{
        expect(isArrayLike([])).to.equal(true)
    });
    it("if value is string return true", () =>{
        expect(isArrayLike('abc')).to.equal(true)
    });
    it("if value is object return false", () =>{
        expect(isArrayLike({ 'a': 1 })).to.equal(false)
    });
})
