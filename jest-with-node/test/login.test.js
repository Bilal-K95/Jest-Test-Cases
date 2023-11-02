describe("Login", () => {
  const name = "bial";
  const userName = "bilal@21.com";
  const password = "Bilal@123";
  test("should not allow space", () => {
    let spaceInUserName = userName.includes(" ");
    expect(spaceInUserName).toBe(false);
  });

  test("Minimum eight characters, at least one letter, one number and one special character:", () => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isValidPassword = passwordRegex.test(password);
    expect(isValidPassword).toBe(true);
  });

  test("should contain @ and . something", () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidEmail = emailRegex.test(userName);
    expect(isValidEmail).toBe(true);
  });

  test("should not allow empty user name", () => {
    expect(userName).not.toBe("");
  });

  test("should not allow empty password ", () => {
    expect(userName).not.toBe("");
  });

  test("should only letters in name ", () => {
    const nameRegex = /^[A-Za-z]+$/;
    let isValidName = nameRegex.test(name);
    expect(isValidName).toBe(true);
  });
});
