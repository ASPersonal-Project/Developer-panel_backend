import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/dto/user.dto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/register')
    public userRegister(@Body() createUserDto : CreateUserDto){
        return this.authService.userRegister(createUserDto);
    }

    @Post('/login')
    public userLogin(@Body() loginUserDto: LoginUserDto){
        return this.authService.userLogin(loginUserDto);
    }
}
