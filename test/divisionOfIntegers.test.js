// node 12 and up
import chai from "chai"
import divisionOfIntegers from "../divisionOfIntegers.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../sum.js")
const expect = chai.expect


describe("Division of Integers", () => {
    it("divide positive number by positive number", () =>{
        var result = divisionOfIntegers(10,2);
        //use .eql to match object 
        expect(result.quotient).to.equal(5);
        expect(result.reminder).to.equal(0);
    });

    it("divide negative number by positive number", () =>{
        var result = divisionOfIntegers(-10,2);
        expect(result.quotient).to.equal(-0);
        expect(result.reminder).to.equal(-10);
    });

    it("Throw error when divide number by 0", () =>{
        expect(() => divisionOfIntegers(5,0)).to.throw("Divisor cannot be zero")
    });
})