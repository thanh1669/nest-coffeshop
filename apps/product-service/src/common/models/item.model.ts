import { AppConfig } from '@app/common/models';
import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
    tableName: 'tbl_items',
    schema: AppConfig.PRODUCT_SERVICE
})
export class Item extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    sku: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        comment: '{1: "Drink", 2: "Food"}',
        defaultValue: 1,
    })
    type: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    price: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    category_id: number;

    @CreatedAt
    created_at: Date;

    @Column({
        type: DataType.JSONB,
        defaultValue: null,
    })
    created_by: object;

    @UpdatedAt
    updated_at: Date;

    @Column({
        type: DataType.JSONB,
        defaultValue: null,
    })
    updated_by: object;

    /**
     * Transform model to expose object
     */
    static transform(params) {
        return params;
    }
}