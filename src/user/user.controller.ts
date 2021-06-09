import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { CreateUserDto } from './dto/user.create.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async index(): Promise<User[]>{
      return this.userService.findAll()
  }

  @Post('register')
  async store(@Body() data: CreateUserDto): Promise<ResultDto>{
    return this.userService.store(data)
  }
}