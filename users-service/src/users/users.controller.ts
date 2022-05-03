import { Body, Controller, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @MessagePattern('get.user')
  getUser() {
    const user = this.userService.getUser();
    return user;
  }

  @MessagePattern('create.user')
  createUser(@Body() dto: UserDto) {
    const user = this.userService.createUser(dto);
    return user;
  }

  @MessagePattern('update.user')
  updateUser(id: string, @Body() dto: UserDto) {
    const user = this.userService.updateUser(id, dto);
    return user;
  }

  @MessagePattern('delete.user')
  deleteUser(id: string) {
    const user = this.userService.deleteUser(id);
    return user;
  }
}
