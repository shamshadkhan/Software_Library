// node 12 and up
import chai from "chai"
import chunk from "../src/chunk.js"
const expect = chai.expect


describe("chunk Operation", () => {
    it("Array must properly chunk based on chunk size", () =>{
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.not.eql([['a', 'b', 'c'], ['d']])
    });
    it("if Array is null must return empty array", () =>{
        expect(chunk(null, 3)).to.eql([])
    });
})
