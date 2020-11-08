// node 12 and up
import chai from "chai"
import sum from "../src/upperFirst.js"
const expect = chai.expect


describe("upperFirst Operation", () => {
    it("first string uppercased when all letter small in string with one word", () =>{
        expect(sum('samsung')).to.equal('Samsung')
    });
    it("first string uppercased when all letter capital in string with one word", () =>{
        expect(sum('GALAXY')).to.equal('GALAXY')
    });
    it("first string uppercased when string has 2 or more word", () =>{
        expect(sum('samsung and galaxy')).to.equal('Samsung and galaxy')
    });
    it("first string uppercased when string has 2 word seprated by hypen", () =>{
        expect(sum('samsung-galaxy')).to.equal('Samsung-galaxy')
    });
})
