const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

// const User = require("../../models/User.model");
// import User model
const User = require("../../models/User.model")
// const { createUser, getUsers } = require("../../controllers/user.controller");
// import controller functions
const {createUser, getUsers} = require("../../controllers/user.controller")

describe("User Controller Tests", () => {

    afterEach(() => {
        sinon.restore();
    });

    // =============================
    // Test createUser
    // =============================
    describe("createUser()", () => {

        it("should create a new user and return 201", async () => {

            const req = {
                body: {
                    username: "Nehal",
                    email: "nehal@test.com"
                }
            };

            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.spy()
            };

            const saveStub = sinon.stub(User.prototype, "save").resolves({
                username: "Nehal",
                email: "nehal@test.com"
            });

            await createUser(req, res);

            expect(saveStub.calledOnce).to.be.true;
            expect(res.status.calledWith(201)).to.be.true;
            expect(res.json.calledOnce).to.be.true;
        });

    });

    // =============================
    // Test getUsers
    // =============================
    describe("getUsers()", () => {

        it("should fetch users with pagination and return 200", async () => {

            const req = {
                query: {
                    page: "1",
                    limit: "2"
                }
            };

            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.spy()
            };

            const aggregateStub = sinon.stub(User, "aggregate").resolves([
                { username: "User1", email: "u1@test.com" },
                { username: "User2", email: "u2@test.com" }
            ]);

            await getUsers(req, res);

            expect(aggregateStub.calledOnce).to.be.true;
            expect(res.status.calledWith(200)).to.be.true;
            expect(res.json.calledOnce).to.be.true;
        });

    });

});