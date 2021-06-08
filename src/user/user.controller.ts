import { Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async index(): Promise<User[]>{
      return this.userService.findAll()
  }
}