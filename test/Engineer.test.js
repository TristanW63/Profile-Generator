const Engineer = require("../lib/Engineer");

test("Can set gitHub", () => {
    const gitHub = "GithubUsername";
    const e = new Engineer("Foo", 1, "test@gmail.com", gitHub);
    expect(e.github).toBe(gitHub);
});

test("getRole() return 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@gmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can get github()", () => {
    const github = "githubUser";
    const e = new Engineer("Foo", 1, "test@gmail.com", github);
    expect(e.getGithub()).toBe(github);
});
