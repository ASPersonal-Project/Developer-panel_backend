import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/dto/user.dto';
import { UserRepository } from 'src/repository/user/user.repository';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository
    ){}

    public async userRegister(createUserDto: CreateUserDto){
        const {email} = createUserDto;
        
        const user = await this.userRepository.fetchUserByEmail(email);
        if(user){
            throw new BadRequestException('Email is already exist');
        }
        return this.userRepository.createUser(createUserDto);
    }

    public async userLogin(loginUserDto: LoginUserDto){
        const {email} = loginUserDto
        const user = await this.userRepository.fetchUserByEmail(email);
        if(!user){
            throw new BadRequestException("User Email is not Exist")
        }

        return;
    }
}
