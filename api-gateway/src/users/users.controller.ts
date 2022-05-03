import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from 'src/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getUser() {
    return this.userService.getUser();
  }

  @Post()
  async createUser(@Body() dto: UserDto) {
    return this.userService.createUser(dto);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.userService.updateUser(id, dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
