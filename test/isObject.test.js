// node 12 and up
import chai from "chai"
import isObject from "../src/isObject.js"
const expect = chai.expect


describe("isObject Operation", () => {
    it("if value is Symbol return false", () =>{
        expect(isObject(Symbol.iterator)).to.equal(false)
    });
    it("if value is null return false", () =>{
        expect(isObject(null)).to.equal(false)
    });
    it("if value is number return false", () =>{
        expect(isObject(1)).to.equal(false)
    });
    it("if value is array return true", () =>{
        expect(isObject([1, 2, 3])).to.equal(true)
    });
    it("if value is string return false", () =>{
        expect(isObject('abc')).to.equal(false)
    });
    it("if value is object return true", () =>{
        expect(isObject({ 'a': Symbol.iterator })).to.equal(true)
    });
    it("if value is function return true", () =>{
        expect(isObject(Function)).to.equal(true)
    });
})
