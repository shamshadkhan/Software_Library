// node 12 and up
import chai from "chai"
import clamp from "../src/clamp.js"
const expect = chai.expect


describe("clamp Operation", () => {
    it("return clamped number", () =>{
        expect(clamp(10,-5,5)).to.equal(-5)
    });
    it("return empty array if both array is same", () =>{
        expect(clamp(-10,-5,5)).to.equal(-5)
    });
    it("return empty array if both array is same", () =>{
        expect(clamp(0,0,0)).to.equal(0)
    });
})
