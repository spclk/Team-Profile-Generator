const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it ("should create a new employee with name, id, and email", () => {
            const employee = new Employee("Konstantin", 5, "bob@gmail.com");
            expect(employee.name).toEqual("Konstantin");
            expect(employee.id).toEqual(5);
            expect(employee.email).toEqual("bob@gmail.com");
        })
    }
    )
    describe("getName", () => {
        it("should pull up Empoyee's name", () => {
            const employee = new Employee("Konstantin", 5, "bob@gmail.com");
            expect(employee.getName()).toEqual("Konstantin");
        })
    })

    describe("getId", () => {
        it("should pull up Empoyee's id", () => {
            const employee = new Employee("Konstantin", 5, "bob@gmail.com");
            expect(employee.getId()).toEqual(5);
        })
    })

    describe("getEmail", () => {
        it("should pull up Empoyee's email", () => {
            const employee = new Employee("Konstantin", 5, "bob@gmail.com");
            expect(employee.getEmail()).toEqual("bob@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should pull up Empoyee's role", () => {
            const employee = new Employee("Konstantin", 5, "bob@gmail.com");
            expect(employee.getRole()).toEqual("Employee");
        })
    })
})

