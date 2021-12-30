import { Body, Controller, Post, UseGuards,Request, Get, Put, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateSkillDto } from 'src/dto/skill.dto';
import { SkillService } from 'src/services/skill/skill.service';

@Controller('skill')
export class SkillController {
    constructor(
        private skillService: SkillService
    ){}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public createSkill(@Request() _req:any,@Body() createSkillDto: CreateSkillDto){
        return this.skillService.createSkill(_req.user,createSkillDto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public fetchSkill(@Request() _req:any){
        return this.skillService.fethcSkill(_req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public updateSkill(@Param('id') id: number, @Body() createSkillDto: CreateSkillDto){
        return this.skillService.updateSkill(id,createSkillDto);
    }
}
