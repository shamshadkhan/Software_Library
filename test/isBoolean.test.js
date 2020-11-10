// node 12 and up
import chai from "chai"
import isBoolean from "../src/isBoolean.js"
const expect = chai.expect


describe("isBoolean Operation", () => {
    it("if value is boolean true return true", () =>{
        expect(isBoolean(true)).to.equal(true)
    });
    it("if value is boolean false return true", () =>{
        expect(isBoolean(false)).to.equal(true)
    });
    it("if value is number return false", () =>{
        expect(isBoolean(1)).to.equal(false)
    });
    it("if value is array return false", () =>{
        expect(isBoolean([1, 2, 3])).to.equal(false)
    });
    it("if value is string return false", () =>{
        expect(isBoolean('abc')).to.equal(false)
    });
    it("if value is object return false", () =>{
        expect(isBoolean({ 'a': 1 })).to.equal(false)
    });
})
