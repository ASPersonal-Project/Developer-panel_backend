import { Table,Column,Model, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, HasMany } from "sequelize-typescript";
import { Education } from "./education.entity";
import { Experience } from "./experience.entity";
import { Skill } from "./skill.entity";

@Table({
    tableName: 'user',
})
export class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    full_name: string;

    @Column
    user_type: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    contact_no: string;

    @Column
    profile_url: string;

    @Column
    description: string;

    @Column
    job_position: string;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;

    @HasMany(() => Education)
    educations: Education[]

    @HasMany(() => Experience)
    experience: Experience[]

    @HasMany(() => Skill)
    skill: Skill[]
}