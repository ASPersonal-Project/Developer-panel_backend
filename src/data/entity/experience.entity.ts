import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt,ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.entity";

@Table({
    tableName: 'Experirence',
})
export class Experience extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @ForeignKey(() => User)
    @Column
    user_id: number

    @Column
    title: string;

    @Column
    employeement_type: string;

    @Column
    company_name: string;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;

    @BelongsTo(() => User)
    user: User;
}