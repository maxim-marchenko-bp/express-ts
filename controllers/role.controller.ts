import { RoleRepository } from "../repositories/role.repository";
import { Request, Response } from "express";

export class RoleController {
  static async getRoles(req: Request, res: Response) {
    const roles = await RoleRepository.getAll();

    return res.status(200).json(roles);
  }

  static async createRole(req: Request, res: Response) {
    await RoleRepository.createRole(req.body);

    return res.status(201).json(req.body);
  }
}
