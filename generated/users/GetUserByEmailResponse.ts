// Original file: proto/user.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { Error as _users_Error, Error__Output as _users_Error__Output } from '../users/Error';

export interface GetUserByEmailResponse {
  'user'?: (_users_User | null);
  'error'?: (_users_Error | null);
  'userOrError'?: "user"|"error";
}

export interface GetUserByEmailResponse__Output {
  'user'?: (_users_User__Output);
  'error'?: (_users_Error__Output);
}
