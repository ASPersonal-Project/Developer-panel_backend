import { Module } from '@nestjs/common';
import { EducationController } from 'src/controller/education/education.controller';
import { educationProviders } from 'src/data/providers/education.provider';
import { EducationRepository } from 'src/repository/education/eduation.repository';
import { EduationService } from 'src/services/eduation/eduation.service';

@Module({
    controllers: [EducationController],
    providers: [...educationProviders,EducationRepository,EduationService]
})
export class EducationModule {}
