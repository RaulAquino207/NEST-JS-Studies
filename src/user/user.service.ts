import { Injectable, Inject } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.create.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async store(data : CreateUserDto): Promise<ResultDto> {
    let newUser = new User
    newUser.name = data.name
    newUser.email = data.email
    newUser.password = data.password

    return this.userRepository.save(newUser)
    .then((result) => {
      return<ResultDto>{
        status: true,
        message: `registered user ${newUser.name}`
      }
    })
    .catch((error) => {
      return<ResultDto>{
        status: false,
        message: `The user ${newUser.name} has not been registered in the system.`
      }
    })

  }
}