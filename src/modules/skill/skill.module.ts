import { Module } from '@nestjs/common';
import { SkillController } from 'src/controller/skill/skill.controller';
import { skillProviders } from 'src/data/providers/skill.provider';
import { SkillRepository } from 'src/repository/skill/skill.repository';
import { SkillService } from 'src/services/skill/skill.service';

@Module({
    controllers: [SkillController],
    providers: [...skillProviders,SkillService,SkillRepository]
})
export class SkillModule {}
