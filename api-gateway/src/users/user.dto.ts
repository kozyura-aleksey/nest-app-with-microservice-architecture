import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 1, description: 'Id of user' })
  id: number;
  @ApiProperty({ example: 'John', description: 'Name of user' })
  @IsNotEmpty()
  name: string;
  @ApiProperty({ example: 34, description: 'Age of User' })
  @IsNotEmpty()
  age: number;
}
