import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { CreateExperienceDto } from 'src/dto/experience.dto';
import { ExperienceRepository } from 'src/repository/experience/experience.repository';

@Injectable()
export class ExperienceService {
    constructor(
        private experienceRepository: ExperienceRepository
    ){}

    public createExperience(user: any,createExperienceDto: CreateExperienceDto){
        createExperienceDto.user_id = user.userId;
        return this.experienceRepository.createExperience(createExperienceDto)
    }

    public fetchExperience(user: any){
        return this.experienceRepository.fetchExperience(user.userId);
    }

    public updateExperience(id:number,createExperienceDto: CreateExperienceDto){
        return this.experienceRepository.updateExperience(id,createExperienceDto);
    }

    public deleteExperience(id:number){
        return this.experienceRepository.deleteExperience(id);
    }
}
