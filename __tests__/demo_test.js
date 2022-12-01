// isInteger.spec.js
var isInteger = require("is-integer");

test("isInteger passes for integer value", () => {
    expect(isInteger(1)).toBe(true);
});

test("isInteger fails for non-integer value", () => {
    expect(isInteger(1.23)).toBe(false);
});


const integerNumbers = [-1, 0, 1];

test.each(integerNumbers)(
    "isInteger passes for integer value %j",
    (fixture) => expect(isInteger(fixture)).toBe(true)
);