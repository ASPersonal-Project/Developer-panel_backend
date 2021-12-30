import { Body, Controller, Delete, Param, Post, Put, UseGuards,Request, Get } from '@nestjs/common';
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
    public createExperience(@Request() _req:any, @Body() createExperienceDto: CreateExperienceDto){
        return this.experienceService.createExperience(_req.user,createExperienceDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public fetchExperience(@Request() _req: any){
        return this.experienceService.fetchExperience(_req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public updateExperience(@Param('id') id: number, @Body() createExperienceDto: CreateExperienceDto){
        return this.experienceService.updateExperience(id,createExperienceDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public deleteExperience(@Param('id') id:number){
        return this.experienceService.deleteExperience(id);
    }
}
