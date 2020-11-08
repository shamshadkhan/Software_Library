// node 12 and up
import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect


describe("toNumber Operation", () => {
    it("string float is converted to number", () =>{
        expect(toNumber('3.2')).to.be.a('number')
    });
    it("string is converted to number", () =>{
        expect(toNumber('test')).to.be.a('number')
    });
    it("Infinity is converted to number", () =>{
        expect(toNumber(Infinity)).to.be.a('number')
    });
    it("number's minumim value is converted to number", () =>{
        expect(toNumber(Number.MIN_VALUE)).to.be.a('number')
    });
    it("number is converted to number", () =>{
        expect(toNumber(4)).to.be.a('number')
    });
    it("trail space is removed in string number and is converted to number", () =>{
        expect(toNumber(' 4 ')).to.be.a('number')
    });
    it("symbol is converted to number", () =>{
        expect(toNumber(Symbol.iterator)).to.be.a('number')
    });
    it("binary number is converted to number", () =>{
        expect(toNumber('0001 0000')).to.be.a('number')
    });
    it("hexa decimel number is converted to number", () =>{
        expect(toNumber(0x7FFFFFFD)).to.be.a('number')
    });
    it("object is converted to number", () =>{
        expect(toNumber({type:"Fiat", model:"500", color:"white"})).to.be.a('number')
    });
    
})
