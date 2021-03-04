const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it ("should create a Manager with name, id, email, and officeNumber", () => {
            const manager = new Manager("Konstantin", 5, "bob@gmail.com", 2);
            expect(manager.name).toEqual("Konstantin");
            expect(manager.id).toEqual(5);
            expect(manager.email).toEqual("bob@gmail.com");
            expect(manager.officeNumber).toEqual(2);
        })
    }
    )
    describe("getName", () => {
        it("should pull up Manager's name", () => {
            const manager = new Manager("Konstantin", 5, "bob@gmail.com", 2);
            expect(manager.getName()).toEqual("Konstantin");
        })
    })

    describe("getId", () => {
        it("should pull up Manager's id", () => {
            const manager = new Manager ("Konstantin", 5, "bob@gmail.com", 2);
            expect(manager.getId()).toEqual(5);
        })
    })

    describe("getEmail", () => {
        it("should pull up Manager's email", () => {
            const manager = new Manager("Konstantin", 5, "bob@gmail.com", 2);
            expect(manager.getEmail()).toEqual("bob@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should pull up Manager's role", () => {
            const manager = new Manager("Konstantin", 5, "bob@gmail.com", 2);
            expect(manager.getRole()).toEqual("Manager");
        })
    })

    describe("getOfficeNumber", () => {
        it("should pull up Manager's Office Number", () => {
            const manager = new Manager("Konstantin", 5, "bob@gmail.com", 2);
            expect(manager.getOfficeNumber()).toEqual(2);
        })
    })
})