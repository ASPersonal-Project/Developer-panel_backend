import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table,CreatedAt,UpdatedAt } from "sequelize-typescript";
import { User } from "./user.entity";

@Table({
    tableName: 'skill',
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

    @CreatedAt
    @Column
    created_at: Date

    @UpdatedAt
    @Column
    updated_at: Date

    @BelongsTo(() => User)
    user: User
}