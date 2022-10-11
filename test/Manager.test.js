const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


test("Can set officeNumber", () => {
    const officeNumbers = 100;
    const e = new Manager("Foo", 1, "test@gmail.com", officeNumbers);
    expect(e.officeNumber).toBe(officeNumbers);
});

test("getRole() returns Manager", () => {
    const employeeTitle = "Manager";
    const e = new Manager("Foo", 1, "test@gmail.com", 100);
    expect(e.getRole()).toBe(employeeTitle);
});

test("Can get getOfficeNumber()", () => {
    const officeNum = 100;
    const e = new Manager("Foo", 1, "test@gmail.com", officeNum);
    expect(e.getOfficeNumber()).toBe(officeNum);
})

