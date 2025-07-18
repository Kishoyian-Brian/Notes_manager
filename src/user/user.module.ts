import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseService } from '../database/connection.service';

@Module({
  providers: [UserService, DatabaseService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
