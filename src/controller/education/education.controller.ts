import { Body, Controller, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateEducationDto } from 'src/dto/education.dto';
import { CreateUserDto } from 'src/dto/user.dto';
import { EduationService } from 'src/services/eduation/eduation.service';

@Controller('education')
export class EducationController {
    constructor(
        private educationService: EduationService
        ){}


    @UseGuards(AuthGuard('jwt'))
    @Post()
    public createEducation(@Request() _req: any, @Body() createEducationDto: CreateEducationDto){
        return this.educationService.createEducation(_req.user,createEducationDto);
    }

    @Put('/:id')
    public updateEducation(
        @Param('id') id: number,
        @Body() createEducationDto: CreateEducationDto){
        return this.educationService.updateEducation(id,createEducationDto)
    }
}

