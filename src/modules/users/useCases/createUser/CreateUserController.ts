import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserAlreadyExistsError } from "../../errors/user-already-exists-error";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;
    try {
      const user = this.createUserUseCase.execute({ name, email });
      console.log("handle");
      console.log(user);
      return response.status(201).send(user);
    } catch (error) {
      return response.status(400).send({ error: "Erro" });
    }
  }
}

export { CreateUserController };
