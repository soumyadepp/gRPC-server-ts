// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _users_CreateUserRequest, CreateUserRequest__Output as _users_CreateUserRequest__Output } from '../users/CreateUserRequest';
import type { CreateUserResponse as _users_CreateUserResponse, CreateUserResponse__Output as _users_CreateUserResponse__Output } from '../users/CreateUserResponse';
import type { DeleteUserRequest as _users_DeleteUserRequest, DeleteUserRequest__Output as _users_DeleteUserRequest__Output } from '../users/DeleteUserRequest';
import type { DeleteUserResponse as _users_DeleteUserResponse, DeleteUserResponse__Output as _users_DeleteUserResponse__Output } from '../users/DeleteUserResponse';
import type { EditUserRequest as _users_EditUserRequest, EditUserRequest__Output as _users_EditUserRequest__Output } from '../users/EditUserRequest';
import type { EditUserResponse as _users_EditUserResponse, EditUserResponse__Output as _users_EditUserResponse__Output } from '../users/EditUserResponse';
import type { GetUserByEmailRequest as _users_GetUserByEmailRequest, GetUserByEmailRequest__Output as _users_GetUserByEmailRequest__Output } from '../users/GetUserByEmailRequest';
import type { GetUserByEmailResponse as _users_GetUserByEmailResponse, GetUserByEmailResponse__Output as _users_GetUserByEmailResponse__Output } from '../users/GetUserByEmailResponse';
import type { GetUsersRequest as _users_GetUsersRequest, GetUsersRequest__Output as _users_GetUsersRequest__Output } from '../users/GetUsersRequest';
import type { UserList as _users_UserList, UserList__Output as _users_UserList__Output } from '../users/UserList';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _users_CreateUserRequest, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _users_CreateUserRequest, callback: grpc.requestCallback<_users_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUserByEmail(argument: _users_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUserByEmail(argument: _users_DeleteUserRequest, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUserByEmail(argument: _users_DeleteUserRequest, callback: grpc.requestCallback<_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  
  EditUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  EditUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  EditUserByEmail(argument: _users_EditUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  EditUserByEmail(argument: _users_EditUserRequest, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  editUserByEmail(argument: _users_EditUserRequest, callback: grpc.requestCallback<_users_EditUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllUsers(argument: _users_GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _users_GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _users_GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _users_GetUsersRequest, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _users_GetUsersRequest, callback: grpc.requestCallback<_users_UserList__Output>): grpc.ClientUnaryCall;
  
  GetUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  GetUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  GetUserByEmail(argument: _users_GetUserByEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  GetUserByEmail(argument: _users_GetUserByEmailRequest, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  getUserByEmail(argument: _users_GetUserByEmailRequest, callback: grpc.requestCallback<_users_GetUserByEmailResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_users_CreateUserRequest__Output, _users_CreateUserResponse>;
  
  DeleteUserByEmail: grpc.handleUnaryCall<_users_DeleteUserRequest__Output, _users_DeleteUserResponse>;
  
  EditUserByEmail: grpc.handleUnaryCall<_users_EditUserRequest__Output, _users_EditUserResponse>;
  
  GetAllUsers: grpc.handleUnaryCall<_users_GetUsersRequest__Output, _users_UserList>;
  
  GetUserByEmail: grpc.handleUnaryCall<_users_GetUserByEmailRequest__Output, _users_GetUserByEmailResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_users_CreateUserRequest, _users_CreateUserResponse, _users_CreateUserRequest__Output, _users_CreateUserResponse__Output>
  DeleteUserByEmail: MethodDefinition<_users_DeleteUserRequest, _users_DeleteUserResponse, _users_DeleteUserRequest__Output, _users_DeleteUserResponse__Output>
  EditUserByEmail: MethodDefinition<_users_EditUserRequest, _users_EditUserResponse, _users_EditUserRequest__Output, _users_EditUserResponse__Output>
  GetAllUsers: MethodDefinition<_users_GetUsersRequest, _users_UserList, _users_GetUsersRequest__Output, _users_UserList__Output>
  GetUserByEmail: MethodDefinition<_users_GetUserByEmailRequest, _users_GetUserByEmailResponse, _users_GetUserByEmailRequest__Output, _users_GetUserByEmailResponse__Output>
}
