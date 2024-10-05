import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';
export declare class UserService {
    private userModel;
    private readonly logger;
    constructor(userModel: Model<UserDocument>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUser(id: string): Promise<User>;
}
