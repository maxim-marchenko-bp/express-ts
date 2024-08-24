import { Router } from 'express';
import { RoleController } from "../controllers/role.controller";
export const roleRouter = Router();

roleRouter.get('/', RoleController.getRoles);
roleRouter.post('/', RoleController.createRole);
