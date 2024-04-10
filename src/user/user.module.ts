import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Logger } from '../common/helpers/logger.service';
import { UserRepository } from './user.repository';
// import { UserRepositoryImpl } from './UserRepositoryImpl';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, Logger, UserRepository],
})
export class UserModule {}