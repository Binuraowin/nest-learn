import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  /**
   * Retrieves all the users from the database with pagination.
   * 
   * @param page The page number to retrieve.
   * @param limit The maximum number of users per page.
   * @returns A promise that resolves to an array of User objects representing the users in the specified page.
   */
  async findAll(page: number, limit: number): Promise<User[]> {
    console.log("user service")
    const users = await this.userRepository.findAll(page, limit);
    return users;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.create(createUserDto);
    return newUser;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.getUsers();
    return users;
  }
}
