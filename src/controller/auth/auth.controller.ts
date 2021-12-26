import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post()
    public userRegister(@Body() createUserDto : CreateUserDto){
        return this.authService.userRegister(createUserDto);
    }
}
