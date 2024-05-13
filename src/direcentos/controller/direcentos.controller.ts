import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { DirecentosService } from '../service/direcentos.service';
import {
  createFileResponse,
  datesResponse,
  deletedResponse,
  directoriosResponse,
  labInput,
} from '../types/folderscentos.pb';

@Controller('labs')
export class DirecentosController {
  constructor(private readonly direcentosService: DirecentosService) {}

  @Get('/')
  private async getDirectorios(): Promise<directoriosResponse> {
    return this.direcentosService.getDirectorios();
  }

  @Post('/date')
  private async getDirectoriosfecha(
    @Body() body: labInput,
  ): Promise<datesResponse> {
    return this.direcentosService.getDates(body);
  }

  @Post('/')
  private async writeToFile(
    @Body() body: labInput,
  ): Promise<createFileResponse> {
    return this.direcentosService.writeToFile(body);
  }

  @Delete('/')
  private async deletedFile(@Body() body: labInput): Promise<deletedResponse> {
    return this.direcentosService.deletedFile(body);
  }
}
