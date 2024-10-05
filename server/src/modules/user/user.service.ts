
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';


@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}


  // async createUser(email: string, password: string): Promise<User> {
  //   const newUser = new this.userModel({ email, password });
  //   return newUser.save();
  // }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser= new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (error) {
      this.logger.error('Error creating user', error);
      throw new Error('Error creating user');
    }
  }

//   async findUserByEmail(email: string): Promise<User | null> {
//     return this.userModel.findOne({ email }).exec();
//   }
// }


async getUser(id: string): Promise<User> {
  try {
    const post = await this.userModel.findById(id);      
      return await this.userModel.findById(id).exec();
    } catch (error) {
      this.logger.error('Error fetching users:', error);
      throw new Error('Error fetching users');
    }
}
}