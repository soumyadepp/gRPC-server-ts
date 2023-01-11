import * as mongoose from "mongoose";
import { IUser } from "../interfaces/user_interface";

const userSchema = new mongoose.Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    designation: { type: String, required: true, default: 'Unassigned' },
    email: { type: String, required: true, unique: true },
    logins: { type: Number, required: true, default: 0 },
    profilePicture: { type: String, required: true, default: '' }
});

export const UserModel =
    mongoose.model<IUser & mongoose.Document>('User', userSchema);



