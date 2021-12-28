import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from 'src/dto/user.dto';
import { UserRepository } from 'src/repository/user/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
    ){}

    public async userRegister(createUserDto: CreateUserDto){
        const {email,password} = createUserDto;
        
        const user = await this.userRepository.fetchUserByEmail(email);
        if(user){
            throw new BadRequestException('Email is already exist');
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        createUserDto.password = hashPassword;

        return this.userRepository.createUser(createUserDto);
    }

    public async userLogin(loginUserDto: LoginUserDto){
        const {email,password} = loginUserDto
        const user = await this.userRepository.fetchUserByEmail(email);
        if(!user){
            throw new BadRequestException("User Email is not Exist")
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            throw new BadRequestException("Password is not Match")
        }

        const payload = {userId: user.id, userType:user.user_type};

        const accessToken = this.jwtService.sign(payload);

        return accessToken;
    }
}
