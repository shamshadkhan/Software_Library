// node 12 and up
import chai from "chai"
import camelCase from "../src/camelCase.js"
const expect = chai.expect


describe("CamelCase Operation", () => {
    it("should remove space from product code and return camel case string", () =>{
        expect(camelCase('Cod Prod')).to.equal(' codProd')
    });
    it("should remove hypen from product code and return camel case string", () =>{
        expect(camelCase('--cod-Prod--')).to.equal(' codProd')
    });
    it("should remove underscore from product code and return camel case string", () =>{
        expect(camelCase('__COD_PROD__')).to.equal(' codProd')
    });
    it("should convert number product code to string", () =>{
        expect(camelCase(3456)).to.equal(' 3456')
    });
})
