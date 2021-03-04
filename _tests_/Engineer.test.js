const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it ("should create an Engineer with name, id, email, and gitHub", () => {
            const engineer = new Engineer("Konstantin", 5, "bob@gmail.com", "spclk");
            expect(engineer.name).toEqual("Konstantin");
            expect(engineer.id).toEqual(5);
            expect(engineer.email).toEqual("bob@gmail.com");
            expect(engineer.gitHub).toEqual("spclk");
        })
    }
    )
    describe("getName", () => {
        it("should pull up Engineer's name", () => {
            const engineer = new Engineer("Konstantin", 5, "bob@gmail.com", "spclk");
            expect(engineer.getName()).toEqual("Konstantin");
        })
    })

    describe("getId", () => {
        it("should pull up Engineer's id", () => {
            const engineer = new Engineer("Konstantin", 5, "bob@gmail.com", "spclk");
            expect(engineer.getId()).toEqual(5);
        })
    })

    describe("getEmail", () => {
        it("should pull up Engineer's email", () => {
            const engineer = new Engineer("Konstantin", 5, "bob@gmail.com", "spclk");
            expect(engineer.getEmail()).toEqual("bob@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should pull up Engineer's role", () => {
            const engineer = new Engineer("Konstantin", 5, "bob@gmail.com", "spclk");
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })

    describe("getGithub", () => {
        it("should pull up Engineer's GitHub username", () => {
            const engineer = new Engineer("Konstantin", 5, "bob@gmail.com", "spclk");
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})