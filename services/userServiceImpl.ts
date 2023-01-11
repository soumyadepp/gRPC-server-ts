import { CreateUserResponse } from "../generated/users/CreateUserResponse";
import { DeleteUserRequest } from "../generated/users/DeleteUserRequest";
import { EditUserRequest } from "../generated/users/EditUserRequest";
import { GetUserByEmailRequest } from "../generated/users/GetUserByEmailRequest";
import { User } from "../generated/users/User";
import { UserServiceHandlers } from "../generated/users/UserService";
import { UserModel } from "../models/User";

export const userServiceImpl = {
    CreateUser: (call,callback) => {
        const user = call.request.user;
        const newUser = new UserModel(user);
    },
    DeleteUserByEmail: (request: DeleteUserRequest) => {

    },
    EditUserByEmail: (request: EditUserRequest) => {
    },
    GetAllUsers: () => {

    },
    GetUserByEmail: (request: GetUserByEmailRequest) => {

    },
} as UserServiceHandlers;
