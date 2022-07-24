import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from 'src/controller/auth/auth.controller';
import { JwtStrategy } from 'src/controller/auth/jwt.strategy';
import { AuthService } from 'src/services/auth/auth.service';
import { jwtConstants } from 'src/shared/contants';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        UserModule,
        PassportModule.register({
            defaultStrategy:'jwt'
        }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '30d'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy,PassportModule]
})
export class AuthModule {}
