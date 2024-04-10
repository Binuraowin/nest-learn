import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import {DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME} from '../config/config'



const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [User],
  synchronize: false,
};

export default config;

