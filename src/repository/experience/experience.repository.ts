import { Inject, Injectable } from "@nestjs/common";
import { Experience } from "src/data/entity/experience.entity";
import { EXPERIENCE_ENTITY } from "src/data/providers/providertypes";
import { CreateExperienceDto } from "src/dto/experience.dto";

@Injectable()
export class ExperienceRepository{
    constructor(
        @Inject(EXPERIENCE_ENTITY)
        private experienceEntity : typeof Experience
    ){}

    createExperience(createExperienceDto: CreateExperienceDto){
        return this.experienceEntity.create(createExperienceDto);
    }

    updateExperience(id: number,createExperienceDto: CreateExperienceDto){
        return this.experienceEntity.update(createExperienceDto, {where: {id: id}})
    }

    deleteExperience(id: number){
        return this.experienceEntity.destroy({where:{id: id}})
    }
}