// node 12 and up
import chai from "chai"
import defaultTo from "../src/defaultTo.js"
const expect = chai.expect


describe("defaultTo Operation", () => {
    it("if value is NaN return value", () =>{
        expect(defaultTo(NaN,10)).to.be.NaN;
    });
    it("if value is null return default value", () =>{
        expect(defaultTo(null,10)).to.equal(10)
    });
    it("if value is number return value number", () =>{
        expect(defaultTo(1,10)).to.equal(1)
    });
    it("if value is undefined return default value", () =>{
        expect(defaultTo(undefined,10)).to.equal(10)
    });
})
