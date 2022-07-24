import { Body, Controller,Get,Param,Post, Put, UseGuards,Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto, UserIntroDto } from 'src/dto/user.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get('/all')
    public async fetchAllUser(){
        return this.userService.fetchUsers()
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async fetchUser(@Request() _req:any){
        return this.userService.fetchUser(_req.user);
    }

    @Post()
    public async createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Get('/:id')
    public fetchUserById(@Param('id') id: number ){
        return this.userService.fetchUserById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/intro')
    public updateUserIntro(@Request() _req:any, @Body() userIntroDto :UserIntroDto){
        return this.userService.updateUserIntro(_req.user,userIntroDto);
    }



}
