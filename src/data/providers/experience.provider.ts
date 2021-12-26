import { Experience } from "../entity/experience.entity";
import { EXPERIENCE_ENTITY } from "./providertypes";

export const experienceProviders = [
    {
        provide: EXPERIENCE_ENTITY,
        useValue: Experience
    }
]