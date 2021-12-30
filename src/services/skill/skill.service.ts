import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from 'src/dto/skill.dto';
import { SkillRepository } from 'src/repository/skill/skill.repository';

@Injectable()
export class SkillService {
    constructor(
        private skillRepository: SkillRepository
    ){}

    public createSkill(user: any,createSkillDto:CreateSkillDto){
        createSkillDto.user_id = user.userId;
        return this.skillRepository.createSkill(createSkillDto);
    }

    public fethcSkill(user:any){
        return this.skillRepository.fetchSkill(user.userId);
    }

    public updateSkill(id: number,createSkillDto: CreateSkillDto){
        return this.skillRepository.updateSkill(id,createSkillDto);
    }
}
