class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


getRole() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Email: ${this.email}`);
}

getName(name) {
    
}
}
module.exports = Employee;