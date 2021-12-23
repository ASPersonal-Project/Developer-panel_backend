import {User} from '../entity/user.entity';
import { USER_ENTITY } from './providertypes';

export const userProviders = [
    {
        provide: USER_ENTITY,
        useValue: User,
    }
]