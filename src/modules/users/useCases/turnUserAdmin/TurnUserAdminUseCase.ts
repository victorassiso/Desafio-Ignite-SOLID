import { UserNotFoundError } from "../../errors/user-not-found-error";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new UserNotFoundError();
    }

    const userAdmin = this.usersRepository.turnAdmin(user);

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
