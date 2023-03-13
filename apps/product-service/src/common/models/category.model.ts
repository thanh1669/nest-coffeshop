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
    tableName: 'tbl_categories',
    schema: AppConfig.PRODUCT_SERVICE
})
export class Category extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    name: string;

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