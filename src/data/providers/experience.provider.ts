import { Experience } from "../entity/experience.entity";
import { EXPERIENCE_ENTITY } from "./providertypes";

export const ExperienceProviders = [
    {
        provide: EXPERIENCE_ENTITY,
        useValue: Experience
    }
]