import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { DirecentosService } from '../service/direcentos.service';
import {
  A,
  AResponse,
  DuracionResponse,
  PcsResponse,
  Programacion,
  WResponse,
  actividadInput,
  actividadResponse,
  createAinput,
  createDuracioninput,
  createFileInput,
  createFileProgInput,
  createFileResponse,
  createWinput,
  datesResponse,
  deleteProgramacionInput,
  deleteProgramacionResponse,
  deletedResponse,
  directoriosResponse,
  existFileResponse,
  labInput,
  laboratoriosResponse,
  laboratoriosbdResponse,
  labsMonitoringResponse,
  lastactividadResponse,
  pcsInput,
  programacionResponse,
  programacionesResponse,
  updateLabInput,
  updateLabResponse,
  updateProgramacionInput,
  updateProgramacionResponse,
  writeToFilesInput,
} from '../types/folderscentos.pb';

@Controller('labs')
export class DirecentosController {
  constructor(private readonly direcentosService: DirecentosService) {}

  @Get('/')
  private async getDirectorios(): Promise<directoriosResponse> {
    return this.direcentosService.getDirectorios();
  }

  @Get('/laboratorioscnts')
  private async getLaboratorios(): Promise<laboratoriosResponse> {
    return this.direcentosService.getLaboratorioscnts();
  }

  @Get('/laboratoriosdb')
  private async getLaboratoriosdb(): Promise<laboratoriosbdResponse> {
    return this.direcentosService.getLaboratoriosdb();
  }

  @Post('/createProgramacion')
  private async createProgramacion(
    @Body() body: Programacion,
  ): Promise<programacionResponse> {
    return this.direcentosService.createProgramacion(body);
  }

  @Post('/createA')
  private async createA(@Body() body: createAinput): Promise<AResponse> {
    return this.direcentosService.createA(body);
  }

  @Post('/createW')
  private async createW(@Body() body: createWinput): Promise<WResponse> {
    return this.direcentosService.createW(body);
  }

  @Post('/createDuracion')
  private async createDuracion(
    @Body() body: createDuracioninput,
  ): Promise<DuracionResponse> {
    return this.direcentosService.createDuracion(body);
  }

  @Patch('/updateLaboratorio')
  private async updateLaboratorio(
    @Body() body: updateLabInput,
  ): Promise<updateLabResponse> {
    return this.direcentosService.updateLaboratoriodb(body);
  }

  @Patch('/updateProgramacion')
  private async updateProgramacion(
    @Body() body: updateProgramacionInput,
  ): Promise<updateProgramacionResponse> {
    return this.direcentosService.updateProgramacion(body);
  }

  @Get('/programaciones')
  private async getProgramaciones(): Promise<programacionesResponse> {
    return this.direcentosService.getProgramaciones();
  }

  @Get('/labsmonitoring')
  private async labsmonitoring(): Promise<labsMonitoringResponse> {
    return this.direcentosService.getLabsMonitoring();
  }

  @Post('/dates')
  private async getDirectoriosfecha(
    @Body() body: labInput,
  ): Promise<datesResponse> {
    return this.direcentosService.getDates(body);
  }

  @Post('/actividades')
  private async getDirectorioActividades(
    @Body() body: actividadInput,
  ): Promise<actividadResponse> {
    return this.direcentosService.getActividades(body);
  }

  @Post('/lastactividad')
  private async getlastActivid(
    @Body() body: actividadInput,
  ): Promise<lastactividadResponse> {
    return this.direcentosService.getLastActividad(body);
  }

  @Post('/pcs')
  private async getDirectoriosCmptadores(
    @Body() body: pcsInput,
  ): Promise<PcsResponse> {
    return this.direcentosService.getPcs(body);
  }

  @Post('/')
  private async writeToFile(
    @Body() body: createFileInput,
  ): Promise<createFileResponse> {
    return this.direcentosService.writeToFile(body);
  }

  @Post('/writeTofiles')
  private async writeToFiles(
    @Body() body: writeToFilesInput,
  ): Promise<createFileResponse> {
    return this.direcentosService.writeToFiles(body);
  }

  @Post('/prog')
  private async writeToFileProg(
    @Body() body: createFileProgInput,
  ): Promise<createFileResponse> {
    return this.direcentosService.writeToFileProg(body);
  }

  @Delete('/')
  private async deletedFile(@Body() body: labInput): Promise<deletedResponse> {
    return this.direcentosService.deletedFile(body);
  }

  @Delete('/deleteProgramacion')
  private async deleteProgramacion(
    @Body() body: deleteProgramacionInput,
  ): Promise<deleteProgramacionResponse> {
    return this.direcentosService.deletedProgramacion(body);
  }

  @Post('/existFile')
  private async existFile(@Body() body: labInput): Promise<existFileResponse> {
    return this.direcentosService.existFile(body);
  }
}
