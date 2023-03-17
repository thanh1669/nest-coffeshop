import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from '../../common/models';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Item) private itemRespository: typeof Item
    ) { }

    getAll(params, offset = 0, limit = 20) {
        return this.itemRespository.findAll({
            where: params,
            offset,
            limit
        })
    }

    createItem(itemObject) {
        return this.itemRespository.create(itemObject);
    }

    getItemById(itemId) {
        return this.itemRespository.findByPk(itemId);
    }
}
