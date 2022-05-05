import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { IUser } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @MessagePattern('get.users')
  getUsers(): Promise<IUser[]> {
    const user = this.userService.getUsers();
    return user;
  }

  @MessagePattern('get.user')
  getUserById(id: string): Promise<IUser> {
    const user = this.userService.getUserById(id);
    return user;
  }

  @MessagePattern('create.user')
  createUser(@Body() dto: UserDto): Promise<IUser> {
    const user = this.userService.createUser(dto);
    return user;
  }

  @MessagePattern('update.user')
  updateUser(id: string, @Body() dto: UserDto): Promise<IUser> {
    const user = this.userService.updateUser(id, dto);
    return user;
  }

  @MessagePattern('delete.user')
  deleteUser(id: string): Promise<IUser> {
    const user = this.userService.deleteUser(id);
    return user;
  }
}
