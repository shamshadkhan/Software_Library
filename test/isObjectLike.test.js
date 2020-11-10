// node 12 and up
import chai from "chai"
import isObjectLike from "../src/isObjectLike.js"
const expect = chai.expect


describe("isObjectLike Operation", () => {
    it("if value is Symbol return false", () =>{
        expect(isObjectLike(Symbol.iterator)).to.equal(false)
    });
    it("if value is null return false", () =>{
        expect(isObjectLike(null)).to.equal(false)
    });
    it("if value is number return false", () =>{
        expect(isObjectLike(1)).to.equal(false)
    });
    it("if value is array return true", () =>{
        expect(isObjectLike([1, 2, 3])).to.equal(true)
    });
    it("if value is string return false", () =>{
        expect(isObjectLike('abc')).to.equal(false)
    });
    it("if value is object return true", () =>{
        expect(isObjectLike({ 'a': Symbol.iterator })).to.equal(true)
    });
    it("if value is function return false", () =>{
        expect(isObjectLike(Function)).to.equal(false)
    });
})
