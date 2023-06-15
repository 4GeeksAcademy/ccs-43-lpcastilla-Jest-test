const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 154.247 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToyYen(3.5)).toBe(539.8659); //1 dolar son 154.247 yen, entonces 3.5 dolares deberian ser = (3.5 * 154.247)
})

test("One yen should be 102.32 pound", function(){
    // importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(358.12); //1 yen son 102.32 pound, entonces 3.5 yen deberian ser = (3.5 * 102.32)
})