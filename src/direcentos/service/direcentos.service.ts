import { Inject, Injectable } from '@nestjs/common';
import {
  DIRECENTOS_SERVICE_NAME,
  FoldersCentosServiceClient,
  PcsResponse,
  actividadResponse,
  createFileResponse,
  datesResponse,
  deletedResponse,
  directoriosResponse,
  existFileResponse,
  laboratoriosResponse,
  labsMonitoringResponse,
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

  public async getLaboratorios(): Promise<laboratoriosResponse> {
    return firstValueFrom(this.svc.getLaboratorios({}));
  }

  public async getLabsMonitoring(): Promise<labsMonitoringResponse> {
    return firstValueFrom(this.svc.getLabsMonitoring({}));
  }

  public async getDates(payload): Promise<datesResponse> {
    return firstValueFrom(this.svc.getDates(payload));
  }

  public async getActividades(payload): Promise<actividadResponse> {
    return firstValueFrom(this.svc.getActividades(payload));
  }

  public async getPcs(payload): Promise<PcsResponse> {
    return firstValueFrom(this.svc.getPcs(payload));
  }

  public async writeToFile(payload): Promise<createFileResponse> {
    return firstValueFrom(this.svc.writeToFile(payload));
  }

  public async writeToFiles(payload): Promise<createFileResponse> {
    return firstValueFrom(this.svc.writeToFiles(payload));
  }

  public async writeToFileProg(payload): Promise<createFileResponse> {
    return firstValueFrom(this.svc.writeToFileProg(payload));
  }

  public async existFile(payload): Promise<existFileResponse> {
    return firstValueFrom(this.svc.existFile(payload));
  }

  public async deletedFile(payload): Promise<deletedResponse> {
    return firstValueFrom(this.svc.deletedFile(payload));
  }
}
