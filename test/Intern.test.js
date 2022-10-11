const Intern = require("../lib/Intern");

test("Can set school name", () => {
    const schoolName = "Grand Valley";
    const e = new Intern("Foo", 1 , "test@gmail.com", schoolName);
    expect(e.school).toBe(schoolName);
});

test("Can getRole() return Intern", () => {
    const testEmployee = "Intern";
    const e = new Intern("Foo", 1 , "test@gmail.com", testEmployee);
    expect(e.getRole()).toBe(testEmployee);
});

test("Can get school name", () => {
    const school = " Grand Valley";
    const e = new Intern("Foo", 1, "test@gmail.com", school);
    expect(e.getSchool()).toBe(school);
});