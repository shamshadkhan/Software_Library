// node 12 and up
import chai from "chai"
import sum from "../src/camelCase.js"
const expect = chai.expect


describe("CamelCase Operation", () => {
    it("should remove space from product code and return camel case string", () =>{
        expect(sum('Cod Prod')).to.equal(' codProd')
    });
    it("should remove hypen from product code and return camel case string", () =>{
        expect(sum('--cod-Prod--')).to.equal(' codProd')
    });
    it("should remove underscore from product code and return camel case string", () =>{
        expect(sum('__COD_PROD__')).to.equal(' codProd')
    });
    it("should convert number product code to string", () =>{
        expect(sum(3456)).to.equal(' 3456')
    });
})
