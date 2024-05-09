import { Inject, Injectable } from '@nestjs/common';
import {
  DIRECENTOS_SERVICE_NAME,
  FoldersCentosServiceClient,
  createFileResponse,
  datesResponse,
  deletedResponse,
  directoriosResponse,
} from '../types/folderscentos.pb';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DirecentosService {
  private svc: FoldersCentosServiceClient;

  @Inject(DIRECENTOS_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService(DIRECENTOS_SERVICE_NAME);
  }

  public async getDirectorios(): Promise<directoriosResponse> {
    return firstValueFrom(this.svc.getDirectorios({}));
  }

  public async getDates(payload): Promise<datesResponse> {
    return firstValueFrom(this.svc.getDates(payload));
  }

  public async writeToFile(payload): Promise<createFileResponse> {
    return firstValueFrom(this.svc.writeToFile(payload));
  }

  public async deletedFile(payload): Promise<deletedResponse> {
    return firstValueFrom(this.svc.deletedFile(payload));
  }
}
