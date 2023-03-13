import { AppConfig } from '@app/common/models';
import {
    Column,
    CreatedAt,
    DataType,
    Model,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';

@Table({
    tableName: 'tbl_orders',
    schema: AppConfig.ORDER_SERVICE
})
export class Order extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    code: string;

    @Column({
        type: DataType.INTEGER,
        comment: '{1: "Pending", 2: "Processing", 3: "Delivering", 4: "Fullfilment"}',
        defaultValue: 1,
    })
    status: number;

    @Column({
        type: DataType.INTEGER,
        comment: '{1: "Take away", 2: "Customer"}',
        defaultValue: 1,
    })
    source: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    total_item: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    total_quantity: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    total_original_price: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    total_discount_price: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    total_vat_price: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    total_price: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    total_paid: number;

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