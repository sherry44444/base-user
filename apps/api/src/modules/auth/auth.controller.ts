import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  getHello(@Body() body: any): Promise<any> {
    return this.authService.signUp(body);
  }
}
