import { UserNotFoundError } from "../../errors/user-not-found-error";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ForbiddenError } from "../../errors/forbiden-error";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new UserNotFoundError();
    }

    if (!user.admin) {
      throw new ForbiddenError();
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
