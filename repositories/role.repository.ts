import { AppDataSource } from "../data-source";
import { Role } from "../entities/role";
import { CreateRoleDto } from "../dto/create-role.dto";

export class RoleRepository {
  static repository = AppDataSource.getRepository(Role);

  static async getAll(): Promise<Role[]> {
    return await RoleRepository.repository.find();
  }

  static async createRole(role: CreateRoleDto): Promise<Role> {
    return await RoleRepository.repository.save(role);
  }
}
