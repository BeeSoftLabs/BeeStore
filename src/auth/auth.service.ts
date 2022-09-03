import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/user/dto';
import { User } from 'src/user/entities/user.entity';
import { MessageHandler } from 'src/utils/enums/message.handler';
import { LoginAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private readonly logger = new Logger('ProductsService');

  async createAuth(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

      await this.userRepository.save(user);
      delete user.password;
      return user;
    } catch (error) {
      if (error.code === '23505')
        throw new HttpException(
          'User is already exist',
          HttpStatus.BAD_REQUEST,
        );

      this.logger.error(error);
      throw new InternalServerErrorException(MessageHandler.UNEXPECTED_ERROR);
    }
  }

  async loginAuth(loginUserDto: LoginAuthDto) {
    const { password, email } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true },
    });

    if (!user)
      throw new UnauthorizedException(MessageHandler.UNAUTHORIZED_CREDENTIALS);

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException(MessageHandler.UNAUTHORIZED_CREDENTIALS);

    return user;
  }
}
