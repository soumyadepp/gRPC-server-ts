import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as mongoose from 'mongoose';
import {ProtoGrpcType}  from './generated/user';
import {userServiceImpl} from './services/userServiceImpl';
import { UserServiceHandlers } from './generated/users/UserService';
import * as dotenv from 'dotenv';

const PORT = 8082;
const PROTO_FILE = "./proto/user.proto";

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname,PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

const userPackage = grpcObj.users;
dotenv.config();

function main () {
    const server = getServer();
    const url = process.env.MONGO_URI || "";
    mongoose.connect(url as string)
    .then(() => {
        console.log('Connected to mongodb');
    })
    .catch(err => {
        console.log('Failed to connect to mongodb');
    });

    server.bindAsync(`0.0.0.0:${PORT}`,grpc.ServerCredentials.createInsecure(),(err,port) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(`Server started on port ${port}`);
        server.start();
    })
}

function getServer () {
    const server = new grpc.Server();
    server.addService(userPackage.UserService.service,userServiceImpl);
    return server;
}

main();