// node 12 and up
import chai from "chai"
import toInteger from "../src/toInteger.js"
const expect = chai.expect


describe("toInteger Operation", () => {
    it("string float is converted to integer", () =>{
        const value = toInteger('3.2');
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("float is converted to integer", () =>{
        const value = toInteger(3.2);
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("string is converted to integer", () =>{
        const value = toInteger('test');
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("Infinity is converted to integer", () =>{
        const value = toInteger(Infinity);
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("number's minumim value is converted to integer", () =>{
        const value = toInteger(Number.MIN_VALUE);
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("number is converted to integer", () =>{
        const value = toInteger(4);
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("trail space is removed in string number and is converted to integer", () =>{
        const value = toInteger(' 4 ');
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("symbol is converted to integer", () =>{
        const value = toInteger(Symbol.iterator);
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("binary number is converted to integer", () =>{
        const value = toInteger('0001 0000');
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("hexa decimel number is converted to integer", () =>{
        const value = toInteger(0x7FFFFFFD);
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    it("object is converted to integer", () =>{
        const value = toInteger({type:"Fiat", model:"500", color:"white"});
        expect(value).to.be.a('number');
        expect(value % 1).to.be.equal(0)
    });
    
})
