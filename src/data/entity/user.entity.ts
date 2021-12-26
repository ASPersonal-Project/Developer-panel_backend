import { Table,Column,Model, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: 'user',
    timestamps: false
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
    contact_no: string;

    @Column
    profile_url: string;

    @Column
    description: string;

    @Column
    headline: string;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date
}