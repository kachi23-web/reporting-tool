
// src/user/user.controller.ts
import { Body, Controller,Logger, Param, Patch, Get, Query, HttpException, HttpStatus, UsePipes, ValidationPipe, Post  } from '@nestjs/common';
import { UserService } from './user.service';
// import { User } from '@/schema/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';


@Controller('api/user')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  // http://localhost:3000/user
  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(

  @Body() 
  createUserDto: CreateUserDto)
 {
  // console.log('Received DTO:', createPostDto);
  try {
    return await this.userService.createUser(createUserDto);
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}


}
