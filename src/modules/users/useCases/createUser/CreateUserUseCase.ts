import { UserAlreadyExistsError } from "../../errors/user-already-exists-error";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const userWithSameEmail = this.usersRepository.findByEmail(email);
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }
    const user = this.usersRepository.create({ name, email });
    console.log("execute");
    console.log(user);
    return user;
  }
}

export { CreateUserUseCase };
