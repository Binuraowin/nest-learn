import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Retrieves all the users from the database with pagination.
   * 
   * @param page The page number to retrieve.
   * @param limit The maximum number of users per page.
   * @returns A promise that resolves to an array of User objects representing the users in the specified page.
   */
  findAll(page: number, limit: number): Promise<User[]> {
    const skip = (page - 1) * limit;
    return this.userRepository.find({ skip, take: limit });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
}