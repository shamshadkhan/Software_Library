// node 12 and up
import chai from "chai"
import countBy from "../src/countBy.js"
const expect = chai.expect

const products = [
    { 'product': 'samsung', 'active': true },
    { 'product': 'fridge',   'active': true },
    { 'product': 'electronics',   'active': false }
]

describe("countBy Operation", () => {
    it("return composed agregate count based on given predicate key values", () =>{
        expect(countBy(products, value=>value.active)).to.eql({ 'true': 1, 'false': 0 })
    });
})
