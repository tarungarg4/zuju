import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'zuju',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true, // For Production system this should be set to false
      cache: {
        duration: 60 * 60 * 1000,
      },
      timezone: 'Z',
    };
  }
}
