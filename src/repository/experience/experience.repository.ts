import { Inject, Injectable } from "@nestjs/common";
import { Experience } from "src/data/entity/experience.entity";
import { EXPERIENCE_ENTITY } from "src/data/providers/providertypes";

@Injectable()
export class ExperienceRepository{
    constructor(
        @Inject(EXPERIENCE_ENTITY)
        private experienceEntity : typeof Experience
    ){}
}