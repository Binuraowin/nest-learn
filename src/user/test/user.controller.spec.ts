import { Test } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { userStub } from './stubs/user.stub';
import { Logger } from '../../common/helpers/logger.service';

// describe('UserController', () => {
//   let controller: UserController;
//   let createDto = new CreateUserDto();
//   (createDto.email = "john.doe@example.com"), (createDto.firstName = "john")
//   let userService = {
//     create: jest.fn((user) => {
//       return {
//         id: 1,
//         ...user
//       }
//     })
//   }

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [UserController],
//       providers: [UserService, {
//         provide: UserService,
//         useValue: userService
//       }],
//     }).compile();

//     controller = module.get<UserController>(UserController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

// });

jest.mock('../user.service.ts');

describe("UserController", () =>{
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () =>{
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers:[UserService, Logger]
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
    userService = moduleRef.get<UserService>(UserService);
    jest.clearAllMocks();
  })
 
  describe('getUsers', () => {
    describe('when getUsers is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await (userController.getUsers() as Promise<User[]>);
        console.log("users", users)
      })

      test('then it should call usersService', () => {
        expect(userService.getUsers).toHaveBeenCalled();
      })

      test('then it should return users', () => {
        expect(users).toEqual([userStub()])
      })
    })
  })

  describe('findAll Users with pagination', () => {
    describe('when findAll is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await (userController.findAll() as Promise<User[]>);
      })

      test('then it should call usersService', () => {
        expect(userService.findAll).toHaveBeenCalled();
      })

      test('then it should return users', () => {
        expect(users).toEqual([userStub()])
      })
    })
  })
  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user: User;
      let createUserDto: CreateUserDto

      beforeEach(async () => {
        createUserDto = {
          email: userStub().email,
          firstName: userStub().firstName,
          lastName: userStub().lastName,
          password: userStub().password,
        }
        user = await userController.create(createUserDto);
      })

      test('then it should call usersService', () => {
        expect(userService.create).toHaveBeenCalledWith(createUserDto);
      })

      test('then it should return a user', () => {
        expect(user).toEqual(userStub())
      })
    })
  })
})