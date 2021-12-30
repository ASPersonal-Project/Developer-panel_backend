import { Inject, Injectable } from "@nestjs/common";
import { Skill } from "src/data/entity/skill.entity";
import { SKILL_ENTITY } from "src/data/providers/providertypes";
import { CreateSkillDto } from "src/dto/skill.dto";

@Injectable()
export class SkillRepository{
    constructor(
        @Inject(SKILL_ENTITY)
        private skillEntity: typeof Skill
    ){}

    public createSkill(createSkillDto: CreateSkillDto){
        return this.skillEntity.create(createSkillDto);
    }

    public fetchSkill(userId:number){
        return this.skillEntity.findOne({where: {user_id: userId}})
    }

    public updateSkill(id:number,createSkillDto: CreateSkillDto){
        return this.skillEntity.update(createSkillDto,{where: {id: id}})
    }
}