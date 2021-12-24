import { Module } from '@nestjs/common';
import { ExperienceController } from 'src/controller/experience/experience.controller';
import { experienceProviders } from 'src/data/providers/experience.provider';
import { ExperienceRepository } from 'src/repository/experience/experience.repository';
import { ExperienceService } from 'src/services/experience/experience.service';

@Module({
    controllers: [ExperienceController],
    providers: [...experienceProviders,ExperienceService,ExperienceRepository]
})
export class ExperienceModule {}
