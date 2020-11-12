// node 12 and up
import chai from "chai"
import isdate from "../src/isdate.js"
const expect = chai.expect


describe("isdate Operation", () => {
    it("if value isdate object should return true", () =>{
        expect(isdate(new Date)).to.equal(true)
    });
    it("if value is not date object should return false", () =>{
        expect(isdate('Mon April 23 2012')).to.equal(false)
    });
    it("if value is null should return false", () =>{
        expect(isdate(null)).to.equal(false)
    });
})
