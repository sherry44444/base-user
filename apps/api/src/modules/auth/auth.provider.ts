import { DataSource } from 'typeorm';
import { User } from 'src/shared/entity/user.entity';

export const authProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['postgres'],
  },
];
