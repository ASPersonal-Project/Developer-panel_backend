import { Inject, Injectable } from "@nestjs/common";
import { where } from "sequelize/dist";
import { USER_ENTITY } from "src/data/providers/providertypes";
import { CreateUserDto, UserIntroDto } from "src/dto/user.dto";
import {User} from '../../data/entity/user.entity';

@Injectable()
export class UserRepository{
    constructor(
       @Inject(USER_ENTITY)
       private userEntity: typeof User
    ){}

    public async fetchAllUser(): Promise<User[]>{
        return this.userEntity.findAll();
    }

    public async fetchUser(userId:number) {
        return this.userEntity.findOne({where: {id:userId}})
    }

    public createUser(createUserDto: CreateUserDto) {
        return this.userEntity.create(createUserDto)
    }

    public updateUserIntro(userId:number,userIntroDto: UserIntroDto){
        return this.userEntity.update(userIntroDto,{where:{id:userId}})
    }

    public fetchUserById(id: number): Promise<User> {
        return this.userEntity.findOne({where: {id: id}})
    }

    public fetchUserByEmail(email: string): Promise<User>{
        return this.userEntity.findOne({where: {
            email: email
        }})
    }
}