import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ValidateResponse } from './auth.pb';

@Injectable()
export class AuthService {
  private auth;

  @Inject('AuthService')
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.auth = this.client.getService('AuthService');
  }

  public async validate(token: string): Promise<ValidateResponse> {
    return firstValueFrom(this.auth.validate(token));
  }
}
