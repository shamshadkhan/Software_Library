// node 12 and up
import chai from "chai"
import sum from "../sum.js"
const expect = chai.expect


describe("Sum", () => {
 it("adds positive number to positive number", () =>{
     expect(sum(3,6)).to.equal(9)
 });
 it("adds positive number to negative number", () =>{
    expect(sum(3,-6)).to.equal(-3)
});
it("adds negative number to negative number", () =>{
    expect(sum(-6,-6)).to.equal(-12)
});
it("adds positive number to negative number", () =>{
    expect(sum(0,-6)).to.equal(-6)
});
it('should return NaN if passed a word string', function() {
    expect(sum( "hello", "pal" )).to.be.NaN;
  });
})
