// node 12 and up
import chai from "chai"
import keys from "../src/keys.js"
const expect = chai.expect


describe("keys Operation", () => {
    it("if value is null return empty array", () =>{
        expect(keys(null)).to.eql([])
    });
    it("if value is number return false", () =>{
        expect(keys(1)).to.eql([])
    });
    it("if value is array return keys of array", () =>{
        expect(keys([1, 2, 3])).to.eql(['0','1','2'])
    });
    it("if value is object return keys of object", () =>{
        expect(keys({ 'a': 1 })).to.eql(['a'])
    });
})
