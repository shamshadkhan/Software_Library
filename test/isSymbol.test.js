// node 12 and up
import chai from "chai"
import isSymbol from "../src/isSymbol.js"
const expect = chai.expect


describe("isSymbol Operation", () => {
    it("if value is Symbol return true", () =>{
        expect(isSymbol(Symbol.iterator)).to.equal(true)
    });
    it("if value is null return false", () =>{
        expect(isSymbol(null)).to.equal(false)
    });
    it("if value is array return false", () =>{
        expect(isSymbol([1, 2, 3])).to.equal(false)
    });
    it("if value is string return false", () =>{
        expect(isSymbol('abc')).to.equal(false)
    });
    it("if value is object return false", () =>{
        expect(isSymbol({ 'a': Symbol.iterator })).to.equal(false)
    });
})
