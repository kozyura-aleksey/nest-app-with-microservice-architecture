import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: UserDto) {
    const user = this.userRepository.create(dto);
    return user;
  }

  async getUser() {
    const user = this.userRepository.findAll();
    return user;
  }

  async updateUser(id: string, dto: UserDto) {
    const user = this.userRepository.update(
      { name: dto.name, age: dto.age },
      {
        where: {
          id: id,
        },
      },
    );
    return user;
  }

  async deleteUser(id: string) {
    const user = this.userRepository.destroy({
      where: {
        id: id,
      },
    });
    return user;
  }
}
