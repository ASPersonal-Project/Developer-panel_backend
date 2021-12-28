import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.entity";

@Table({
    tableName: 'education'
})
export class Education extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(() => User)
    @Column
    user_id: number;

    @Column
    university: string;

    @Column
    degree: string;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @Column
    created_at: Date;

    @Column
    updated_at: Date;

    @BelongsTo(() => User)
    user: User
}