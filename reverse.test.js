const stringReverse = require("./reverse.js")
describe('calculator', ()=>{
    test('string length check',()=>{
        expect(stringReverse('abcd')).toBe('dcba')
    })
})

