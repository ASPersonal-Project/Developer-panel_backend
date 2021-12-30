import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from 'src/dto/education.dto';
import { EducationRepository } from 'src/repository/education/eduation.repository';

@Injectable()
export class EduationService {
    constructor(
        private educationRepository: EducationRepository
    ){}

    public createEducation(user:any,createEducationDto: CreateEducationDto){
        createEducationDto.user_id = user.userId;
        return this.educationRepository.createEducation(createEducationDto);
    }

    public fetchEducation(user: any){
        return this.educationRepository.fetchEducation(user.userId);
    }

    public updateEducation(id: number,createEducationDto: CreateEducationDto){
        return this.educationRepository.updateEducation(id,createEducationDto);
    }

    public deleteEducation(id: number){
        return this.educationRepository.deleteEducation(id);
    }
}
