import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { DirecentosService } from '../service/direcentos.service';
import {
  PcsResponse,
  createFileInput,
  createFileResponse,
  datesResponse,
  deletedResponse,
  directoriosResponse,
  existFileResponse,
  labInput,
  pcsInput,
} from '../types/folderscentos.pb';

@Controller('labs')
export class DirecentosController {
  constructor(private readonly direcentosService: DirecentosService) {}

  @Get('/')
  private async getDirectorios(): Promise<directoriosResponse> {
    return this.direcentosService.getDirectorios();
  }

  @Post('/dates')
  private async getDirectoriosfecha(
    @Body() body: labInput,
  ): Promise<datesResponse> {
    return this.direcentosService.getDates(body);
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

  @Delete('/')
  private async deletedFile(@Body() body: labInput): Promise<deletedResponse> {
    return this.direcentosService.deletedFile(body);
  }

  @Post('/existFile')
  private async existFile(@Body() body: labInput): Promise<existFileResponse> {
    return this.direcentosService.existFile(body);
  }
}
