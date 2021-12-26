import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { EducationModule } from './modules/education/education.module';
import { EduationService } from './services/eduation/eduation.service';
import { EducationController } from './controller/education/education.controller';
import { ExperienceController } from './controller/experience/experience.controller';
import { ExperienceModule } from './modules/experience/experience.module';
import { ExperienceService } from './services/experience/experience.service';
import { SkillController } from './controller/skill/skill.controller';
import { SkillService } from './services/skill/skill.service';
import { SkillModule } from './modules/skill/skill.module';

@Module({
  imports: [DatabaseModule,UserModule, EducationModule, ExperienceModule, SkillModule],
  controllers: [SkillController],
  providers: [SkillService],
})
export class AppModule {}
