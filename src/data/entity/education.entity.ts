import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'education',
    timestamps: false
})
export class Education extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

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
}