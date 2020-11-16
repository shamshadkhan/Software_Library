// node 12 and up
import chai from "chai"
import compact from "../src/compact.js"
const expect = chai.expect

describe("compact Operation", () => {
    it("return value that are not false from array", () =>{
        expect(compact([0, 1, false, 2, '', 3])).to.be.an('array')
        //Not Applicable        
        //expect(compact([0, 1, false, 2, '', 3])).to.eql([1,2,3]).throw()
    });
})
