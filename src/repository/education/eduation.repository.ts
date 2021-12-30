import { Inject, Injectable } from "@nestjs/common";
import { Education } from "src/data/entity/education.entity";
import { EDUCATION_ENTITY } from "src/data/providers/providertypes";
import { CreateEducationDto } from "src/dto/education.dto";

@Injectable()
export class EducationRepository{
    constructor(
       @Inject(EDUCATION_ENTITY)
        private educationEntity : typeof Education
    ){}


    public createEducation(createEducationDto: CreateEducationDto){
        return this.educationEntity.create(createEducationDto);
    }

    public fetchEducation(userId: number){
        return this.educationEntity.findAll({where: {user_id: userId}})
    }

    public updateEducation(id: number,createEducationDto: CreateEducationDto){
        return this.educationEntity.update(createEducationDto, {where: {
            id: id
        }})
    }

    public deleteEducation(id: number){
        return this.educationEntity.destroy({where: {id: id}});
    }
}