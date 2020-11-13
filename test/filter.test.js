// node 12 and up
import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

const products = [
    { 'product': 'samsung', 'active': true },
    { 'product': 'fridge',   'active': false }
]

describe("filter Operation", () => {
    it("If predicate active return list of active product", () =>{
        expect(filter(products, ({ active }) => active)).to.eql([{ 'product': 'samsung', 'active': true }])
    });
    it("If predicate inactive return list of inactive product", () =>{
        expect(filter(products, ({ active }) => !active)).to.eql([{ 'product': 'fridge',   'active': false }])
    });
    it("If array is null return empty list", () =>{
        expect(filter(null, ({ active }) => active)).to.eql([[]])
    });
})
