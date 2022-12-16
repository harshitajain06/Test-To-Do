const calculator = require('./calculator.js')

describe('calculator', ()=>{
test('add 1+6',()=>{
    expect(calculator.add(1,6)).toBe(7)
})
})