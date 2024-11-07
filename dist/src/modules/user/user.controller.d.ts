import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: import("../../schema/user.schema").User;
    }>;
}
