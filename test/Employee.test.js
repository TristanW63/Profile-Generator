const Employee = require("../lib/Employee");

test("check if employee", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
});

test("Can set Name", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id number", () => {
    const newId = 100;
    const e = new Employee("Foo", newId);
    expect(e.id).toBe(newId);
});

test("Can set Email", () => {
    const testEmail = "test@gamil.com";
    const e = new Employee("Foo", 1, testEmail);
    expect(e.email).toBe(testEmail);
});

test("Can get name from getName()", () => {
    const testName = "Sam";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("Can get id from getId()", () => {
    const testId = 100;
    const e = new Employee("Foo", testId);
    expect(e.getId()).toBe(testId);
});

test("Can get email form getEmail()", () => {
     const newEmail = "test@gamil.com";
     const e = new Employee("Foo", 1, newEmail);
     expect(e.getEmail()).toBe(newEmail);
});

test('getRole() should return "Employee"', () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1 , "test@gmail.com");
    expect(e.getRole()).toBe(testValue);
});