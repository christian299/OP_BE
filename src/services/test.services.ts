import Test from '../models/tables/Test';
import CommonResponse from '../utils/response.utils';
import {AddTestDTO}  from '../models/dto/testDTO';
import { Op } from 'sequelize' ;


class TestServices extends CommonResponse{
    async getTest () {
        try {
            let exist = await Test.findAll();
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, 0, "Record Found!");
            }else {
                return this.RESPONSE(404, {}, 0, "No Record Found!");
            } 
        } catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
        
    }

    async createTest (dto: AddTestDTO) {   
        try {  
            let response = await Test.create({ ...dto });
            if (response != null) {
                return this.RESPONSE(200, response, 0, "Success!");
            }else {
                return this.RESPONSE(400, {}, 0, "Something Wrong!");
            }

        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }

    }


    async getTestByIDandAvailability (id: number) {
        try {
            let exist = await Test.findOne({ where: { id: { [Op.or]: [1, 2, id]}}});
            if (exist != null) {
                return this.RESPONSE(200, exist, 0, "Record Found!");
            }else {
                return this.RESPONSE(404, {}, 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestAndOp (id: number) {
        try {
            let exist = await Test.findOne({ where: {[Op.and]: [{ id: id }, { name: null }]} });
            let count: number = await Test.count({ where: {[Op.and]: [{ id: id }, { name: null }]} });              
            if (exist != null) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, {}, 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestAndOpFindAll () {
        try {
            let exist = await Test.findAll({ where: {[Op.and]: [{ id: { [Op.gt]: 500001} }, { test_data: null }]} });
            let count = await Test.count({ where: {[Op.and]: [{ id: { [Op.gt]: 500001} }, { test_data: null }]} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, {}, 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestNotOpFindAll (id: number) {
        try {
            let exist = await Test.findAll({ where: { id: {[Op.ne]: id}} });
            let count: number = await Test.count({ where: { id: {[Op.ne]: id}} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, {}, 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestILikeOpFindAll (name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.iLike]: `%${name}%`}} });
            let count: number = await Test.count({ where: { name: {[Op.iLike]: `%${name}%`}} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, [], 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestLikeOpFindAll (name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.like]: `%${name}`}} });
            let count: number = await Test.count({ where: { name: {[Op.like]: `%${name}`}} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, [], 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestNotLikeOpFindAll (name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.notLike]: `%${name}`}} });
            let count: number = await Test.count({ where: { name: {[Op.notLike]: `%${name}`}} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, [], 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestNotILikeOpFindAll (name: string) {
        try {
            let exist = await Test.findAll({ where: { name: {[Op.notILike]: `%${name}`}} });
            let count: number = await Test.count({ where: { name: {[Op.notILike]: `%${name}`}} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, [], 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestAndOpGTEFindAll () {
        try {
            let exist = await Test.findAll({ where: {[Op.and]: [{ id: { [Op.gte]: 500001} }, { test_data: null }]} });
            let count = await Test.count({ where: {[Op.and]: [{ id: { [Op.gte]: 500001} }, { test_data: null }]} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, {}, 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
    async getTestAndOpLTFindAll () {
        try {
            let exist = await Test.findAll({ where: {[Op.and]: [{ id: { [Op.lt]: 500001} }, { test_data: null }]} });
            let count = await Test.count({ where: {[Op.and]: [{ id: { [Op.lt]: 500001} }, { test_data: null }]} });
            if (exist.length != 0) {
                return this.RESPONSE(200, exist, count, "Record Found!");
            }else {
                return this.RESPONSE(404, {}, 0, "Not Found!");
            }
        }catch (err: any) {
            return this.RESPONSE(500, {}, 0, "Internal Server Error");
        }
    }
}

export default new TestServices;