import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/user.dto';
import { IUser } from './interfaces/users.interface';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: UserDto): Promise<IUser> {
    const user = this.userRepository.create(dto);
    return user;
  }

  async getUserById(id: string): Promise<IUser> {
    const user = this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    return user;
  }

  async getUsers(): Promise<IUser[]> {
    const users = this.userRepository.findAll();
    return users;
  }

  async updateUser(id: string, dto: UserDto): Promise<IUser> {
    this.userRepository.update(
      { name: dto.name, age: dto.age },
      {
        where: {
          id: id,
        },
      },
    );
    const user = this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    return user;
  }

  async deleteUser(id: string): Promise<IUser> {
    const user = this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    this.userRepository.destroy({
      where: {
        id: id,
      },
    });
    return user;
  }
}
