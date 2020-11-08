// node 12 and up
import chai from "chai"
import sum from "../src/add.js"
const expect = chai.expect


describe("Add Operation", () => {
 it("adds positive number to positive number", () =>{
     expect(sum(3,6)).to.equal(9)
 });
 it("adds positive number to negative number", () =>{
    expect(sum(3,-6)).to.equal(-3)
});
it("adds negative number to negative number", () =>{
    expect(sum(-6,-6)).to.equal(-12)
});
it("adds integer number to float number", () =>{
    expect(sum(6,3.2)).to.equal(9.2)
});
})
