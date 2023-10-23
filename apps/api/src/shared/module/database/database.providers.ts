import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'postgres',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '34.143.204.18',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
