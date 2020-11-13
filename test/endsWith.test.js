// node 12 and up
import chai from "chai"
import endsWith from "../src/endsWith.js"
const expect = chai.expect

describe("endsWith Operation", () => {
    it("endsWith return true when matches correct end of string with target", () =>{
        expect(endsWith('array','y')).to.equal(true);
    });
    it("endsWith return false when cant match correct end of string with target", () =>{
        expect(endsWith('array','a')).to.equal(false);
    });
    it("endsWith return true when match correct end of string with target and position of end", () =>{
        expect(endsWith('array','a',4)).to.equal(true);
    });
    it("endsWith return false when match correct end of string with target and negative position of end", () =>{
        expect(endsWith('array','a',-4)).to.equal(false);
    });
    it("endsWith return false when match correct end of string with target and position > then array length", () =>{
        expect(endsWith('array','a',7)).to.equal(false);
    });
    
})
