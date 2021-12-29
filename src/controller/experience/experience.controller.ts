import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { identity } from 'rxjs';
import { CreateExperienceDto } from 'src/dto/experience.dto';
import { ExperienceService } from 'src/services/experience/experience.service';

@Controller('experience')
export class ExperienceController {
    constructor(
        private experienceService: ExperienceService
    ){}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public createExperience(@Body() createExperienceDto: CreateExperienceDto){
        return this.experienceService.createExperience(createExperienceDto);
    }

    @Put('/:id')
    public updateExperience(@Param('id') id: number, @Body() createExperienceDto: CreateExperienceDto){
        return this.experienceService.updateExperience(id,createExperienceDto);
    }

    @Delete('/:id')
    public deleteExperience(@Param('id') id:number){
        return this.experienceService.deleteExperience(id);
    }
}
