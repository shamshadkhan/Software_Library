// node 12 and up
import chai from "chai"
import reduce from "../src/reduce.js"
const expect = chai.expect


describe("reduce Operation", () => {
    it("reduce array based on given iterator", () =>{
        const reduceFunc = 
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3)
    });
    it("reduce object based on given iterator", () =>{
        const reduceFunc = (result, value, key) => {
               (result[value] || (result[value] = [])).push(key)
               return result
            }
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 },reduceFunc, {})).to.eql({ '1': ['a', 'c'], '2': ['b'] })
    });
})
