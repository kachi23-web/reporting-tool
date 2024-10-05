import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from 'src/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';



@Module({

  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Register User schema
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}




