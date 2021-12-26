import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: 'Experirence',
    timestamps: false
})
export class Experience extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

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
}