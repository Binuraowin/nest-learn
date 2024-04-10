import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import typeOrmConfig from './database/typeorm-config.service';
import { Logger } from './common/helpers/logger.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),UserModule],
  controllers: [AppController],
  providers: [AppService,Logger],
})
export class AppModule {}