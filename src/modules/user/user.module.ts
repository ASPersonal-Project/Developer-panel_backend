import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user/user.controller';
import { userProviders } from 'src/data/providers/user.provider';
import { UserRepository } from 'src/repository/user/user.repository';
import { UserService } from 'src/services/user/user.service';

@Module({
    controllers: [UserController],
    providers: [...userProviders,UserService,UserRepository],
    exports: [UserRepository]
})
export class UserModule {}
