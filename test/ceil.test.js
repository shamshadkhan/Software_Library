// node 12 and up
import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect


describe("ceil Operation", () => {
    it("return the ceiling value", () =>{
        expect(ceil(6.004, 2)).to.equal(6.01)
        expect(ceil(6040, -2)).to.equal(6100)
        expect(ceil(4.006)).to.equal(5)
    });
})
