// node 12 and up
import chai from "chai"
import divide from "../src/divide.js"
const expect = chai.expect


describe("divide Operation", () => {
    it("divide positive number to positive number", () =>{
        expect(divide(3,6)).to.equal(1)
    });
    it("divide positive number to negative number should return positive number", () =>{
        expect(divide(3,-6)).to.equal(1)
    });
    it("divide negative number to negative number should return positive number", () =>{
        expect(divide(-6,-6)).to.equal(1)
    });
    it("divide integer number to float number should return whole number", () =>{
        expect(divide(6,3.2)).to.equal(1)
    });
})
