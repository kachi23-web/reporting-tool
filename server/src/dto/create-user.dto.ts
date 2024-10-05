import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
// import{Post} from '../post.entity'

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;
}

