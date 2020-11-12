// node 12 and up
import chai from "chai"
import toFinite from "../src/toFinite.js"
const expect = chai.expect


describe("toFinite Operation", () => {
    it("string float is converted to number", () =>{
        const value = toFinite('3.2');
        expect(value).to.be.a('number');
    });
    it("float is converted to number", () =>{
        const value = toFinite(3.2);
        expect(value).to.be.a('number');
    });
    it("string is converted to number", () =>{
        const value = toFinite('test');
        expect(value).to.be.a('number');
    });
    it("Infinity is converted to number", () =>{
        const value = toFinite(Infinity);
        expect(value).to.be.a('number');
    });
    it("number's minumim value is converted to number", () =>{
        const value = toFinite(Number.MIN_VALUE);
        expect(value).to.be.a('number');
    });
    it("number is converted to number", () =>{
        const value = toFinite(4);
        expect(value).to.be.a('number');
    });
    it("null is not converted to number", () =>{
        expect(null).to.be.null;
    });
    it("negative number is converted to number", () =>{
        const value = toFinite(-1);
        expect(value).to.be.a('number');
    });
    it("0 number is converted to number", () =>{
        const value = toFinite(0);
        expect(value).to.be.a('number');
    });
    
})
