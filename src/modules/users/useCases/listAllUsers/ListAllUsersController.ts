import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";
import { UserNotFoundError } from "../../errors/user-not-found-error";
import { ForbiddenError } from "../../errors/forbiden-error";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = request.header("user_id");
    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).send(users);
    } catch (error) {
      return response.status(400).send({ error: "Erro" });
    }
  }
}

export { ListAllUsersController };
