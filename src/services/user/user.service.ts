import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserIntroDto } from 'src/dto/user.dto';
import { UserRepository } from 'src/repository/user/user.repository';

@Injectable()
export class UserService {
    constructor(
        private userRepository : UserRepository
    ){}

    public async fetchUsers(){
        return this.userRepository.fetchAllUser();
    }

    public fetchUser(user:any){
        return this.userRepository.fetchUser(user.userId);
    }

    public createUser(createUserDto: CreateUserDto){
        return this.userRepository.createUser(createUserDto);
    }

    public fetchUserById(id: number){
        return this.userRepository.fetchUserById(id)
    }

    public updateUserIntro(user:any,userIntroDto: UserIntroDto){
        console.log('---------------',userIntroDto);
        return this.userRepository.updateUserIntro(user.userId,userIntroDto);
    }
}
