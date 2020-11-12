// node 12 and up
import chai from "chai"
import words from "../src/words.js"
const expect = chai.expect


describe("words Operation", () => {
    it("string of words passed without pattern should return array of words", () =>{
        expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles'])
    });
    it("string of words passed with pattern match should return array of words and words that matchthe pattern", () =>{
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.eql(['fred', 'barney', '&', 'pebbles'])
    });
    it("string of alphanumeric characters passed without pattern should return array of words", () =>{
        expect(words('Çüéâ äàåçê')).to.eql(['Çüéâ', 'äàåçê'])
    });
    it("empty should return empty array", () =>{
        expect(words('')).to.eql([])
    });
})
