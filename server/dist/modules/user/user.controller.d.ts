import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<import("../../schema/user.schema").User>;
}
