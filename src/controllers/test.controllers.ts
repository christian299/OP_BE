import { DotenvConfigOptions } from "dotenv";
import { AddTestDTO } from "../models/dto/testDTO";
import TestServices from "../services/test.services";

class TestController {
    async getTest () {
        let response = await TestServices.getTest();
        return response;
    }
    async createTest (requestObject: AddTestDTO) {
        let response = await TestServices.createTest(requestObject);
        return response;
    }
    async getTestByIDandAvailability (requestObject: number) {
        let response = await TestServices.getTestByIDandAvailability(requestObject);
        return response;
    }
    async getTestAndOp(requestObject: number) {
        let response = await TestServices.getTestAndOp(requestObject);
        return response;
    }
    async getTestAndOpFindAll() {
        let response = await TestServices.getTestAndOpFindAll();
        return response;
    }
    async getTestNotOpFindAll(requestObject: number) {
        let response = await TestServices.getTestNotOpFindAll(requestObject);
        return response;
    }
    async getTestILikeOpFindAll(requestObject: string) {
        let response = await TestServices.getTestILikeOpFindAll(requestObject);
        return response;
    }
    async getTestLikeOpFindAll(requestObject: string) {
        let response = await TestServices.getTestLikeOpFindAll(requestObject);
        return response;
    }
    async getTestNotLikeOpFindAll(requestObject: string) {
        let response = await TestServices.getTestNotLikeOpFindAll(requestObject);
        return response;
    }
    async getTestNotILikeOpFindAll(requestObject: string) {
        let response = await TestServices.getTestNotILikeOpFindAll(requestObject);
        return response;
    }
    async getTestAndOpGTEFindAll() {
        let response = await TestServices.getTestAndOpGTEFindAll();
        return response;
    }
    async getTestAndOpLTFindAll() {
        let response = await TestServices.getTestAndOpLTFindAll();
        return response;
    }
}
export default new TestController;