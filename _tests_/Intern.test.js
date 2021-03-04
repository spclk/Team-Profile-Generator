const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it ("should create an Intern with name, id, email, and school", () => {
            const intern = new Intern("Konstantin", 5, "bob@gmail.com", "Stanford");
            expect(intern.name).toEqual("Konstantin");
            expect(intern.id).toEqual(5);
            expect(intern.email).toEqual("bob@gmail.com");
            expect(intern.school).toEqual("Stanford");
        })
    }
    )
    describe("getName", () => {
        it("should pull up Intern's name", () => {
            const intern = new Intern("Konstantin", 5, "bob@gmail.com", "Stanford");
            expect(intern.getName()).toEqual("Konstantin");
        })
    })

    describe("getId", () => {
        it("should pull up Intern's id", () => {
            const intern = new Intern("Konstantin", 5, "bob@gmail.com", "Stanford");
            expect(intern.getId()).toEqual(5);
        })
    })

    describe("getEmail", () => {
        it("should pull up Intern's email", () => {
            const intern = new Intern("Konstantin", 5, "bob@gmail.com", "Stanford");
            expect(intern.getEmail()).toEqual("bob@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should pull up Intern's role", () => {
            const intern = new Intern("Konstantin", 5, "bob@gmail.com", "Stanford");
            expect(intern.getRole()).toEqual("Intern");
        })
    })

    describe("getSchool", () => {
        it("should pull up Intern's School name", () => {
            const intern = new Intern("Konstantin", 5, "bob@gmail.com", "Stanford");
            expect(intern.getSchool()).toEqual("Stanford");
        })
    })
})