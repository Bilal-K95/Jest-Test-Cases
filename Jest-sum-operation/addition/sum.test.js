const { sum, multiplication, testObject } = require("./sum");

// without parameter
test("sum function test case", () => {
  expect(sum()).not.toBe(6);
  expect(sum()).toBe(7);
});

// with parameter

test("mul function by passing params", () => {
  expect(multiplication()).not.toBe(8);
  expect(multiplication(2, 3)).toBe(6);
});

// with object

test("object testing", () => {
  expect(testObject()).toEqual({ name: "bilal" });
});
