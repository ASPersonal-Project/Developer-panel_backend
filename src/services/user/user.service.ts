import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
    constructor(
        private userRepository : UserRepository
    ){}

    public async fetchUsers(){
        return this.userRepository.fetchAllUser();
    }
}
