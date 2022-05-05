import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('users-service') private client: ClientProxy) {}

  async getUsers() {
    return this.client.send('get.users', '');
  }

  async getUserById(id: string) {
    return this.client.send('get.user', id);
  }

  async createUser(dto: UserDto) {
    return this.client.send('create.user', dto);
  }

  async updateUser(id: string, dto: UserDto) {
    return this.client.send('update.user', { id, dto });
  }

  async deleteUser(id: string) {
    return this.client.send('delete.user', id);
  }
}
