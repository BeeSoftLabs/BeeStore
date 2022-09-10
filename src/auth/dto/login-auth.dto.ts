import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { validatePassword } from 'src/shared/actions/validations';
import { MessageHandler } from 'src/shared/enums';

export class LoginAuthDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @Matches(validatePassword, {
    message: MessageHandler.PASSWORD_INVALID,
  })
  password: string;
}
