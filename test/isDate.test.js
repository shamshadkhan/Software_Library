// node 12 and up
import chai from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect


describe("isDate Operation", () => {
    it("if value isDate object should return true", () =>{
        expect(isDate(new Date)).to.equal(true)
    });
    it("if value is not date object should return false", () =>{
        expect(isDate('Mon April 23 2012')).to.equal(false)
    });
    it("if value is null should return false", () =>{
        expect(isDate(null)).to.equal(false)
    });
})
