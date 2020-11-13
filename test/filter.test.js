// node 12 and up
import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

const products = [
    { 'product': 'samsung', 'active': true },
    { 'product': 'fridge',   'active': false }
]

describe("filter Operation", () => {
    it("return filtered array based on predicate key value of input array", () =>{
        expect(filter(products, ({ active }) => active)).to.eql([{ 'product': 'samsung', 'active': true }])
        expect(filter(products, ({ active }) => !active)).to.eql([{ 'product': 'fridge',   'active': false }])
    });
    it("If input array is null return empty list", () =>{
        expect(filter(null, ({ active }) => active)).to.eql([[]])
    });
})
