import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";
import { v4 as uuidV4 } from "uuid";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = {
      id: uuidV4(),
      name,
      admin: false,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.users.push(user);
    console.log("create");
    console.log(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const userIndex = this.users.findIndex(
      (user) => user.id === receivedUser.id
    );

    this.users[userIndex].admin = true;
    this.users[userIndex].updated_at = new Date();

    return this.users[userIndex];
  }

  list(): User[] {
    // Complete aqui
    const users = this.users;
    return users;
  }
}

export { UsersRepository };
