import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  RegisterResponse,
  RegisterRequest,
  LoginRequest,
  LoginResponse,
  FindUserByIdRequest,
  FindUserByIdResponse,
} from '../type/auth.pb';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  private async register(
    @Body() body: RegisterRequest,
  ): Promise<RegisterResponse> {
    return this.authService.register(body);
  }

  @Put('login')
  private async login(@Body() body: LoginRequest): Promise<LoginResponse> {
    return this.authService.login(body);
  }

  @Get('user/:id')
  private async findUser(
    @Param() id: FindUserByIdRequest,
  ): Promise<FindUserByIdResponse> {
    return this.authService.getUser(id);
  }
}
