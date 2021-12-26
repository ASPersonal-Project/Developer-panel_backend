import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'skill',
    timestamps: false
})
export class Skill extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    user_id: number

    @Column
    technologies: string

    @Column
    interpersonal_skill: string

    @Column
    created_at: Date

    @Column
    updated_at: Date
}