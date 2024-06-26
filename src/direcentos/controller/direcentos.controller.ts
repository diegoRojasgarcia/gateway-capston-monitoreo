import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { DirecentosService } from '../service/direcentos.service';
import {
  PcsResponse,
  actividadInput,
  actividadResponse,
  createFileInput,
  createFileProgInput,
  createFileResponse,
  datesResponse,
  deletedResponse,
  directoriosResponse,
  existFileResponse,
  labInput,
  laboratoriosResponse,
  labsMonitoringResponse,
  lastactividadResponse,
  pcsInput,
  writeToFilesInput,
} from '../types/folderscentos.pb';

@Controller('labs')
export class DirecentosController {
  constructor(private readonly direcentosService: DirecentosService) {}

  @Get('/')
  private async getDirectorios(): Promise<directoriosResponse> {
    return this.direcentosService.getDirectorios();
  }

  @Get('/laboratorios')
  private async getLaboratorios(): Promise<laboratoriosResponse> {
    return this.direcentosService.getLaboratorios();
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

  @Post('/existFile')
  private async existFile(@Body() body: labInput): Promise<existFileResponse> {
    return this.direcentosService.existFile(body);
  }
}
