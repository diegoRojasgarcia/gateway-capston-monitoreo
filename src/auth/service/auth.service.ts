import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  AUTH_SERVICE_NAME,
  AuthServiceClient,
  FindUserByIdRequest,
  FindUserByIdResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ValidateRequest,
  ValidateResponse,
} from '../type/auth.pb';

@Injectable()
export class AuthService {
  private svc: AuthServiceClient;

  @Inject(AUTH_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService(AUTH_SERVICE_NAME);
  }

  public async validate({ token }: ValidateRequest): Promise<ValidateResponse> {
    return firstValueFrom(this.svc.validate({ token }));
  }

  public async login({
    email,
    password,
  }: LoginRequest): Promise<LoginResponse> {
    return firstValueFrom(this.svc.login({ email, password }));
  }

  public async register({
    email,
    nombre,
    password,
  }: RegisterRequest): Promise<RegisterResponse> {
    return firstValueFrom(this.svc.register({ email, nombre, password }));
  }

  public async getUser({
    id,
  }: FindUserByIdRequest): Promise<FindUserByIdResponse> {
    return firstValueFrom(this.svc.FindUserById({ id }));
  }
}
