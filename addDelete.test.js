const stringLength = require("./addDelete.js")

test('string length check',()=>{
    expect(stringLength('')).toBe('Give valid input')
    expect(stringLength('abcd')).toBe(4)
})
