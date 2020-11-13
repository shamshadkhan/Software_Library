// node 12 and up
import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect


describe("capitalize Operation", () => {
    it("first charachter uppercased when all letter small in string with one word", () =>{
        expect(capitalize('samsung')).to.equal('Samsung')
    });
    it("first charachter uppercased and others lowercased when all letter capital in string with one word", () =>{
        expect(capitalize('GALAXY')).to.equal('Galaxy')
    });
    it("first charachter uppercased when string has 2 or more word", () =>{
        expect(capitalize('samsung and Galaxy')).to.equal('Samsung and galaxy')
    });
    it("first charachter uppercased when string has 2 word seprated by hypen", () =>{
        expect(capitalize('samsung-galaxy')).to.equal('Samsung-galaxy')
    });
})
