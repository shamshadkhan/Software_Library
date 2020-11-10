// node 12 and up
import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect


describe("isEmpty Operation", () => {
    it("if value is boolean true return true", () =>{
        expect(isEmpty(true)).to.equal(true)
    });
    it("if value is null return true", () =>{
        expect(isEmpty(null)).to.equal(true)
    });
    it("if value is number return true", () =>{
        expect(isEmpty(1)).to.equal(true)
    });
    it("if array length > 0 return false", () =>{
        expect(isEmpty([1, 2, 3])).to.equal(false)
    });
    it("if value is string return false", () =>{
        expect(isEmpty('abc')).to.equal(false)
    });
    it("if object length > 0 return false", () =>{
        expect(isEmpty({ 'a': 1 })).to.equal(false)
    });
    it("if object length == 0 return true", () =>{
        expect(isEmpty({})).to.equal(true)
    });
    it("if array length == 0 return true", () =>{
        expect(isEmpty([])).to.equal(true)
    });
    it("if buffer length > 0 return false", () =>{
        expect(isEmpty(new Buffer(2))).to.equal(false)
    });
})
