import { Skill } from "../entity/skill.entity";
import { SKILL_ENTITY } from "./providertypes";

export const skillProviders = [
    {
        provide: SKILL_ENTITY,
        useValue:Skill
    }
]