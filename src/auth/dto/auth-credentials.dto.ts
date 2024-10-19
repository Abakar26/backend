import { IsString, MinLength, MaxLength, Matches, IsEmail } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})/, {
    message: 'Password too weak',
  })
  password: string;
}
