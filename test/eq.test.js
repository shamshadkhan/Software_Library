// node 12 and up
import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect


describe("eq Operation", () => {
    it("first param and second param is same return true", () =>{
        expect(eq('samsung','samsung')).to.equal(true)
    });
    it("first param and second param is not same return false", () =>{
        expect(eq('samsung','samsung1')).to.equal(false)
    });
    it("first param and second param is NaN return true", () =>{
        expect(eq(NaN,NaN)).to.equal(true)
    });
})
