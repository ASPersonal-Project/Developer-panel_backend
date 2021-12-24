import { Inject, Injectable } from "@nestjs/common";
import { Education } from "src/data/entity/education.entity";
import { EDUCATION_ENTITY } from "src/data/providers/providertypes";

@Injectable()
export class EducationRepository{
    constructor(
       @Inject(EDUCATION_ENTITY)
        private educationEntity : typeof Education
    ){}
}