import { Inject, Injectable } from "@nestjs/common";
import { Skill } from "src/data/entity/skill.entity";
import { SKILL_ENTITY } from "src/data/providers/providertypes";

@Injectable()
export class SkillRepository{
    constructor(
        @Inject(SKILL_ENTITY)
        private skillEntity: typeof Skill
    ){}
}