import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlayerDto {
    @IsNotEmpty()
    @IsString()
    username: string
  
    @IsNotEmpty()
    @IsString()
    email: string
    
    @IsNotEmpty()
    @IsString()
    password: string
}
