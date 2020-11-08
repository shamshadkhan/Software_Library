// node 12 and up
import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect


describe("Add Operation", () => {
    it("adds positive number to positive number", () =>{
        expect(add(3,6)).to.equal(9)
    });
    it("adds positive number to negative number", () =>{
        expect(add(3,-6)).to.equal(-3)
    });
    it("adds negative number to negative number", () =>{
        expect(add(-6,-6)).to.equal(-12)
    });
    it("adds integer number to float number", () =>{
        expect(add(6,3.2)).to.equal(9.2)
    });
    it('should return string concatination if passed string', function() {
        expect(add( "hello", 3 )).to.equal("hello3");
    });
})
