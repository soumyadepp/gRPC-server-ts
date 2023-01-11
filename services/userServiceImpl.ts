import { CreateUserResponse } from "../generated/users/CreateUserResponse";
import { DeleteUserRequest } from "../generated/users/DeleteUserRequest";
import { EditUserRequest } from "../generated/users/EditUserRequest";
import { GetUserByEmailRequest } from "../generated/users/GetUserByEmailRequest";
import { UserServiceHandlers } from "../generated/users/UserService";
import { UserModel } from "../models/User";
import * as grpc from '@grpc/grpc-js';
import { CreateUserRequest } from "../generated/users/CreateUserRequest";
import { DeleteUserResponse } from "../generated/users/DeleteUserResponse";
import { EditUserResponse } from "../generated/users/EditUserResponse";
import { GetUsersRequest } from "../generated/users/GetUsersRequest";
import { UserList } from "../generated/users/UserList";
import { GetUserByEmailResponse } from "../generated/users/GetUserByEmailResponse";


export const userServiceImpl = {
    CreateUser: (call: grpc.ServerUnaryCall<CreateUserRequest, CreateUserResponse>,
        callback: grpc.sendUnaryData<CreateUserResponse>) => {
        const { user } = call.request;
        const newUser = new UserModel({
            designation: user?.designation,
            email: user?.email,
            firstName: user?.firstName,
            lastName: user?.lastName,
            logins: user?.logins,
            profilePicture: user?.profilePicture
        });
        newUser.save((err, doc) => {
            if (err) {
                const response = <CreateUserResponse>{
                    error: {
                        message: err.message
                    }
                }
                callback(err, response);
                return;
            }
            const response = <CreateUserResponse>{
                user: {
                    designation: newUser.designation,
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    logins: newUser.logins,
                    profilePicture: newUser.profilePicture
                }
            }
            callback(null, response);
        });
    },
    DeleteUserByEmail: (call: grpc.ServerUnaryCall<DeleteUserRequest, DeleteUserResponse>,
        callback: grpc.sendUnaryData<DeleteUserResponse>) => {
        const { email } = call.request;
        UserModel.findOneAndDelete({ email }, (err, user) => {
            if (err) {
                const response = <DeleteUserResponse>{
                    error: {
                        message: 'Unable to delete user'
                    }
                }
                return;
            }
            const response = <DeleteUserResponse>{
                user: {
                    designation: user.designation,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    logins: user.logins,
                    profilePicture: user.profilePicture
                }
            }
            callback(null, response);
        })
    },
    EditUserByEmail: (call: grpc.ServerUnaryCall<EditUserRequest, EditUserResponse>,
        callback: grpc.sendUnaryData<EditUserResponse>) => {
        const { request } = call;
        const user = request.user;
        UserModel.findOneAndUpdate({ email: user?.email }, {
            $set: {
                designation: user?.designation,
                email: user?.email,
                firstName: user?.firstName,
                lastName: user?.lastName,
                logins: user?.logins,
                profilePicture: user?.profilePicture
            }
        }, (err, user) => {
            if (err) {
                const response = <EditUserResponse>{
                    error: {
                        message: err.message
                    }
                }
                callback(err, response);
                return;
            }
            const response = <EditUserResponse>{
                user: {
                    designation: user.designation,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    logins: user.logins,
                    profilePicture: user.profilePicture
                }
            }
            callback(null, response);
        })
    },
    GetAllUsers: async(call: grpc.ServerUnaryCall<GetUsersRequest, UserList>,
        callback: grpc.sendUnaryData<UserList>) => {
        const allUsers = await UserModel.find();
        callback(null,null);  
    },
    GetUserByEmail: (call: grpc.ServerUnaryCall<GetUserByEmailRequest, GetUserByEmailResponse>,
        callback: grpc.sendUnaryData<GetUserByEmailResponse>) => {
        const { request } = call;
        UserModel.find({ email: request.email }, (err, user) => {
            if (err) {
                const response = <GetUserByEmailResponse>{
                    error: {
                        message: err.message
                    }
                }
                callback(err, response);
            }
            else {
                const response = <GetUserByEmailResponse>{
                    user: {
                        designation: user.designation,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        logins: user.logins,
                        profilePicture: user.profilePicture
                    }
                }
                callback(null, response);
            }
        })
    },
} as UserServiceHandlers;
