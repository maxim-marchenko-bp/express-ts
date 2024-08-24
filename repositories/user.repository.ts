import { User } from "../entities/user";
import { AppDataSource } from "../data-source";
import { CreateUserDto } from "../dto/create-user.dto";

export class UserRepository {
  static repository = AppDataSource.getRepository(User);

  static async getAll(): Promise<User[]> {
    return await UserRepository.repository.find({
      relations: {
        roles: true,
      }
    });
  }

  static async createUser(user: CreateUserDto): Promise<User> {
    return await UserRepository.repository.save(user);
  }
}
