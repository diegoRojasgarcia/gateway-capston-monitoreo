import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  AUTH_SERVICE_NAME,
  AuthServiceClient,
  ValidateRequest,
  ValidateResponse,
} from './auth.pb';

@Injectable()
export class AuthService {
  private svc: AuthServiceClient;

  @Inject(AUTH_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService(AUTH_SERVICE_NAME);
  }

  public async validate({token}: ValidateRequest): Promise<ValidateResponse> {
    return firstValueFrom(this.svc.validate({token}));
  }
}
