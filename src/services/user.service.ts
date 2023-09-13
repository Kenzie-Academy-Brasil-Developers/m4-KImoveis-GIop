import { Repository } from "typeorm";
import { User } from "../entities";
import {
  TuserRequest,
  TuserResponse,
  TuserUpdateRequest,
  TloginRequest,
  TtokenLoginResponse,
} from "../interfaces/index";
import { AppDataSource } from "../data-source";
import {
  createUserSchemaResponse,
  allUserSchemaResponse,
} from "../schemas/index";
import { AppError } from "../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createUserService = async (
  userData: TuserRequest
): Promise<TuserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User = userRepository.create(userData);
  await userRepository.save(user);
  const returnUser: TuserResponse = createUserSchemaResponse.parse(user);
  return returnUser;
};

const listUserService = async (): Promise<TuserResponse[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const usersResponse = allUserSchemaResponse.parse(users);

  return usersResponse;
};
const deleteUserService = async (id: number): Promise<User> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const item = await userRepository.findOneOrFail({
    where: { id },
  });
  await userRepository.softRemove(item);

  return item;
};

const updateUserService = async (
  userData: TuserUpdateRequest,
  userid: number
): Promise<TuserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userid,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(newUserData);

  const returnUser: TuserResponse = createUserSchemaResponse.parse(newUserData);

  return returnUser;
};

const createLoginService = async (
  loginData: TloginRequest
): Promise<TtokenLoginResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }
  const passwordMatch = await compare(loginData.password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }
  const token: string = jwt.sign(
    {
      admin: user.admin,
    },
    String(process.env.SECRET_KEY!),
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );
  return { token };
};

export {
  createUserService,
  listUserService,
  deleteUserService,
  updateUserService,
  createLoginService,
};
