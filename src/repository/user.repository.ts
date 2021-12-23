import { Inject, Injectable } from "@nestjs/common";
import { USER_ENTITY } from "src/data/providers/providertypes";
import {User} from '../data/entity/user.entity';

@Injectable()
export class UserRepository{
    constructor(
       @Inject(USER_ENTITY)
       private userEntity: typeof User
    ){}

    public async fetchAllUser(): Promise<User[]>{
        return this.userEntity.findAll();
    }
}