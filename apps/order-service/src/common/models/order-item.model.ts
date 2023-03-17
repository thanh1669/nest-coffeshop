import { AppConfig } from '@app/common/models';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'tbl_order_items',
    schema: AppConfig.ORDER_SERVICE
})
export class OrderItem extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        comment: '{1: "Pending", 2: "Processing", 3: "Delivering", 4: "Fullfilment"}',
        defaultValue: 1,
    })
    status: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    order_id: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    item_id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    item_sku: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    item_name: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    item_original_price: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    item_price: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    total_quantity: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    total_price: string;

    /**
     * Transform model to expose object
     */
    static transform(params) {
        return params;
    }
}