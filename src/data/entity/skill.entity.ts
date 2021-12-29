import { AutoIncrement, BeforeUpsert, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.entity";

@Table({
    tableName: 'skill',
    timestamps: false
})
export class Skill extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @ForeignKey(() => User)
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

    @BelongsTo(() => Skill)
    skill: Skill
}