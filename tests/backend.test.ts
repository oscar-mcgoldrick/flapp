const request = require("supertest");
import backend from "../src/backend/app"

describe("Test root path", () => {
    test("get", () => {
        return request(backend)
            .get("/api")
            .expect(200, "Backend Response test ting")
    })
})