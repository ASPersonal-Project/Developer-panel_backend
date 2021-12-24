import { Sequelize } from "sequelize-typescript";
import { Education } from "src/data/entity/education.entity";
import { User } from "src/data/entity/user.entity";

export const  databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'anjana',
                database: 'developer_panel',
            });
            sequelize.addModels([User,Education]);
            await sequelize.sync();
            return sequelize;
        }
    }
]