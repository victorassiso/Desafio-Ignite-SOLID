import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";
import { UserNotFoundError } from "../../errors/user-not-found-error";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).send({ error: "Erro" });
    }
  }
}

export { TurnUserAdminController };
