import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { EducationModule } from './modules/education/education.module';
import { EduationService } from './services/eduation/eduation.service';

@Module({
  imports: [DatabaseModule,UserModule, EducationModule],
  controllers: [],
  providers: [EduationService],
})
export class AppModule {}
