// node 12 and up
import chai from "chai"
import every from "../src/every.js"
const expect = chai.expect

describe("every Operation", () => {
    it("return true if all the element of array is truthy", () =>{
        expect(every([true, true], Boolean)).to.equal(true)
    });
    it("return false if at least one of the element of array is not truthy", () =>{
        expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false)
    });
    it("return true array is null", () =>{
        expect(every(null, Boolean)).to.equal(true)
    });
})
