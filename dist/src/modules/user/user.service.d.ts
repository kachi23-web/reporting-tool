import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(email: string, password: string): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
}
