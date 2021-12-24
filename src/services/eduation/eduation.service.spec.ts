import { Test, TestingModule } from '@nestjs/testing';
import { EduationService } from './eduation.service';

describe('EduationService', () => {
  let service: EduationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EduationService],
    }).compile();

    service = module.get<EduationService>(EduationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
