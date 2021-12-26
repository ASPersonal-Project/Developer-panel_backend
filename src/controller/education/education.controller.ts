import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateEducationDto } from 'src/dto/education.dto';
import { EduationService } from 'src/services/eduation/eduation.service';

@Controller('education')
export class EducationController {
    constructor(
        private educationService: EduationService
        ){}

    @Post()
    public createEducation(@Body() createEducationDto: CreateEducationDto){
        return this.educationService.createEducation(createEducationDto);
    }

    @Put('/:id')
    public updateEducation(
        @Param('id') id: number,
        @Body() createEducationDto: CreateEducationDto){
        return this.educationService.updateEducation(id,createEducationDto)
    }
}

