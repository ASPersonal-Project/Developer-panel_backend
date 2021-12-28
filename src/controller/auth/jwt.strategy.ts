import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { LoginUserDto } from "src/dto/user.dto";
import { jwtConstants } from "src/shared/contants";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret,
        })
    }

    async validate(payload: any){
        console.log('**************',payload)
        return {userId: payload.userId,userType: payload.userType}
    }
}