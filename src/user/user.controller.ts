import { Body, Controller, Get, Post, Inject, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Logger } from '../common/helpers/logger.service';
import { User } from './entities/user.entity';


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

  @Get("getAll")
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    const requestData = { page: 1, limit: 10 };
    try {
      this.logger.log(`Executing findAll with data: ${JSON.stringify(requestData)}`, 'UserController');
      return this.userService.findAll(page, limit);
    } catch (error) {
      this.logger.error(`Error occurred while executing findAll`, 'UserController', error);
    }

  }
  @Get()
  async getUsers():Promise<User[]> {
      return await this.userService.getUsers();
  }
}
