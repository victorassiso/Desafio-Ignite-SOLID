import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";
import { UserNotFoundError } from "../../errors/user-not-found-error";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    try {
      const user = this.showUserProfileUseCase.execute({ user_id });
      console.log(user);
      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).send({ error: "Erro" });
    }
  }
}

export { ShowUserProfileController };
