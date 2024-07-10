import { Inject, Injectable } from '@nestjs/common';
import {
  AResponse,
  AplicacionResponse,
  DIRECENTOS_SERVICE_NAME,
  DuracionResponse,
  FoldersCentosServiceClient,
  PcsResponse,
  WResponse,
  actividadResponse,
  aplicacionesResponse,
  createFileResponse,
  datesResponse,
  deleteProgramacionResponse,
  deletedResponse,
  directoriosResponse,
  existFileResponse,
  laboratoriosResponse,
  laboratoriosbdResponse,
  labsMonitoringResponse,
  lastactividadResponse,
  programacionResponse,
  programacionesResponse,
  updateLabResponse,
  updateProgramacionResponse,
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

  public async getLaboratorioscnts(): Promise<laboratoriosResponse> {
    return firstValueFrom(this.svc.getLaboratorioscnts({}));
  }

  public async getLaboratoriosdb(): Promise<laboratoriosbdResponse> {
    return firstValueFrom(this.svc.getLaboratoriosdb({}));
  }

  public async updateLaboratoriodb(payload): Promise<updateLabResponse> {
    return firstValueFrom(this.svc.UpdateLab(payload));
  }

  public async updateProgramacion(
    payload,
  ): Promise<updateProgramacionResponse> {
    return firstValueFrom(this.svc.UpdateProgramacion(payload));
  }

  public async getProgramaciones(): Promise<programacionesResponse> {
    return firstValueFrom(this.svc.getProgramaciones({}));
  }

  public async getAplicaciones(): Promise<aplicacionesResponse> {
    return firstValueFrom(this.svc.getAplicaciones({}));
  }

  public async createProgramacion(payload): Promise<programacionResponse> {
    return firstValueFrom(this.svc.CreateProgramacion(payload));
  }

  public async createA(payload): Promise<AResponse> {
    return firstValueFrom(this.svc.CreateA(payload));
  }

  public async createDuracion(payload): Promise<DuracionResponse> {
    return firstValueFrom(this.svc.CreateDuracion(payload));
  }

  public async createW(payload): Promise<WResponse> {
    return firstValueFrom(this.svc.CreateW(payload));
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

  public async getLastActividad(payload): Promise<lastactividadResponse> {
    return firstValueFrom(this.svc.getLastActividad(payload));
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

  public async deletedProgramacion(
    payload,
  ): Promise<deleteProgramacionResponse> {
    return firstValueFrom(this.svc.DeleteProgramacion(payload));
  }

  public async deletedAplicacion(payload): Promise<AplicacionResponse> {
    return firstValueFrom(this.svc.deleteAplicacion(payload));
  }

  public async createAplicacion(payload): Promise<AplicacionResponse> {
    return firstValueFrom(this.svc.createAplicacion(payload));
  }
}
