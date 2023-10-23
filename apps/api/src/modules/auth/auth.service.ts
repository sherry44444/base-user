import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/shared/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async signUp(data: any): Promise<any> {
    try {
      const res = await this.userRepository.insert(data);
      return {
        success: true,
        data: res,
      };
    } catch (error) {
      throw error;
    }
  }
}
