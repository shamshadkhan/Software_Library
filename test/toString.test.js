// node 12 and up
import chai from "chai"
import toString from "../src/toString.js"
const expect = chai.expect


describe("toString Operation", () => {
    it("if value is Symbol return string", () =>{
        expect(toString(Symbol.iterator)).to.be.a('string');
    });
    it("if value is null return string", () =>{
        expect(toString(null)).to.be.a('string');
    });
    it("if value is number return string", () =>{
        expect(toString(1)).to.be.a('string');
    });
    it("if value is array return string", () =>{
        expect(toString([1, 2, 3])).to.be.a('string');
    });
    it("if value is string return string", () =>{
        expect(toString('abc')).to.be.a('string');
    });
    it("if value is object length return string", () =>{
        expect(toString({ 'a': Symbol.iterator })).to.be.a('string');
    });
})
