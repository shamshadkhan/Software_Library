// node 12 and up
import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"
const expect = chai.expect


describe("defaultToAny Operation", () => {
    it("return default value until value not null,undefined", () =>{
        expect(defaultToAny(null,10)).to.equal(10);
        expect(defaultToAny(1,10)).to.equal(1);
    });
    it("return default value until value is Nan", () =>{
        expect(defaultToAny(NaN,10)).to.be.NaN;
        expect(defaultToAny(undefined, NaN,10)).to.be.NaN;
    });
})
