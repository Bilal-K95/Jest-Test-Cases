const { sum } = require("./sum");
describe("Number Operations", () => {
  test("1 plus 1 should be equal to 2", () => {
    let a = 1;
    let b = 1;
    expect(a + b).toBe(2);
  });

  //not
  test("5 plus 6 is not equal  to 10", () => {
    let a = 5;
    let b = 6;
    expect(a + b).not.toBe(10);
  });
});

describe("Testing with other matcher methods ", () => {
  test("test number is undefined", () => {
    let number = undefined;
    expect(number).not.toBeDefined();
    expect(number).toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });

  test("should expect xero to act like zero", () => {
    let number = 0;

    expect(number).toBeDefined();
    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });

  test("Number Comparison", () => {
    let a = 1;
    let b = 4;
    expect(a + b).toBeGreaterThan(2);
    expect(a + b).toBeLessThan(6);
    expect(a + b).toBeLessThanOrEqual(6);
    expect(a + b).toBeGreaterThanOrEqual(4);
  });
});

// String

//

describe("String Matcher", () => {
  let str = "bilal";
  test("there is j not present in string", () => {
    expect(str).not.toMatch(/j/);
  });

  test("There is i present in string", () => {
    expect(str).toMatch(/i/);
  });
});

// Array

describe("Array Matcher", () => {
  let arr = ["Milk", "Sugar", "Water"];
  test("shping list contain Milk", () => {
    expect(arr).toContain("Milk");
  });

  test("shopin list does not contain Oil", () => {
    expect(arr).not.toContain("Oil");
  });
});

// Object

describe("test with object", () => {
  let user = {
    name: "samir",
    age: 23,
  };
  test("Object contain name and age", () => {
    expect(user).toEqual({
      name: "samir",
      age: 23,
    });
  });

  test("object contains key as name and value as string", () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });
});

// array

describe("test array equality", () => {
  test("check array containing", () => {
    let user = ["samir", "rahil", "arhan"];
    expect(user).toEqual(["samir", "rahil", "arhan"]);
    expect(user).toEqual(expect.arrayContaining(["rahil"]));
  });

  test("check array of object", () => {
    let user = [
      { name: "Shaikh", age: 45 },
      { name: "Rahil", age: 26 },
      { name: "Sonu", age: 26 },
    ];
    expect(user).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
});

describe("function testng", () => {
  test("chech 2 plus 4 equal to 6", () => {
    expect(sum(2, 4)).toBe(6);
  });
});

test("check assertion", () => {
  expect.assertions();
});
