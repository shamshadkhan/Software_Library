// node 12 and up
import chai from "chai"
import upperFirst from "../src/upperFirst.js"
const expect = chai.expect


describe("upperFirst Operation", () => {
    it("first charachter uppercased when all letter small in string with one word", () =>{
        expect(upperFirst('samsung')).to.equal('Samsung')
    });
    it("first charachter uppercased and other charachter remain same when all letter capital in string with one word", () =>{
        expect(upperFirst('GALAXY')).to.equal('GALAXY')
    });
    it("first charachter uppercased when string has 2 or more word", () =>{
        expect(upperFirst('samsung and galaxy')).to.equal('Samsung and galaxy')
    });
    it("first charachter uppercased when string has 2 word seprated by hypen", () =>{
        expect(upperFirst('samsung-galaxy')).to.equal('Samsung-galaxy')
    });
})
