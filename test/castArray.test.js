// node 12 and up
import chai from "chai"
import castArray from "../src/castArray.js"
const expect = chai.expect


describe("castArray Operation", () => {
    it("input string must properly castArray", () =>{
        expect(castArray('abc')).to.eql(['abc'])
    });
    it("input object must properly castArray", () =>{
        expect(castArray({a:1})).to.eql([{a:1}])
    });
    it("input null must properly castArray", () =>{
        expect(castArray(null)).to.eql([null])
    });
    it("empty input must return empty array", () =>{
        expect(castArray()).to.eql([undefined])
    });
})
