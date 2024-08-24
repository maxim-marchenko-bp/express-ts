import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";

export class UserController {
  static async getUsers(req: Request, res: Response) {
    const users = await UserRepository.getAll();

    return res.status(200).json(users);
  }

  static async createUser(req: Request, res: Response) {
    await UserRepository.createUser(req.body);

    return res.status(201).json(req.body);
  }
}
