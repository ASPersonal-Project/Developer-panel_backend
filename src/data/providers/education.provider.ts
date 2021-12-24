import { Education } from "../entity/education.entity";
import { EDUCATION_ENTITY } from "./providertypes";

export const educationProviders = [
    {
        provide:EDUCATION_ENTITY,
        useValue: Education
    }
]