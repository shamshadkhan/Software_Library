// node 12 and up
import chai from "chai"
import at from "../src/at.js"
const expect = chai.expect

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe("at Operation", () => {
    it("return combination of value of array based on given path", () =>{
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3,4])
    });
})
