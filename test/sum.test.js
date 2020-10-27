// node 12 and up
import chai from "chai"
import sum from "../sum.js"
const expect = chai.expect


describe("Sum", () => {
 it("adds positive number to positive number", () =>{
     expect(sum(3,6)).to.equal(9)
 });
})