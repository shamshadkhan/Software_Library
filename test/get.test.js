// node 12 and up
import chai from "chai"
import get from "../src/get.js"
const expect = chai.expect

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe("get Operation", () => {
    it("return value of array based on given path", () =>{
        expect(get(object, 'a[0].b.c')).to.equal(3)
    });
    it("return default value if given path is undefined", () =>{
        expect(get(object, 'a.b.c', 'default')).to.equal('default')
    });
})
