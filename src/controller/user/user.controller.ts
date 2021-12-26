import { Body, Controller,Get,Param,Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    public async fetchAllUser(){
        return this.userService.fetchUsers()
    }

    @Post()
    public async createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Put('/:id')
    public fetchUserById(@Param('id') id: number ){
        return this.userService.fetchUserById(id);
    }

}
