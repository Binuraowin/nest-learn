import { Body, Controller, Get, Post, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Logger } from '../common/helpers/logger.service';


@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger
  ) {}
  

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.logger.log('Getting data...', 'UserController');
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    this.logger.log('Getting data...', 'UserController');
    this.logger.error("find all not worked with warn", "UserController")
    return this.userService.findAll(1,10);
  }
}