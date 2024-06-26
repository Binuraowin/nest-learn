import { userStub } from "../test/stubs/user.stub";

export const UserService = jest.fn().mockReturnValue({
  getUserById: jest.fn().mockResolvedValue(userStub()),
  findAll: jest.fn().mockResolvedValue([userStub()]),
  create: jest.fn().mockResolvedValue(userStub()),
  updateUser: jest.fn().mockResolvedValue(userStub()),
  getUsers: jest.fn().mockResolvedValue([userStub()]),
})