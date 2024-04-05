import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Retrieves all the users from the database.
   * 
   * @returns A promise that resolves to an array of User objects representing all the users in the database.
   */
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}