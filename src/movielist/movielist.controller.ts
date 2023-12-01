import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthGuard } from '../auth/auth.guard';
import {
  CreateMovielistRequest,
  CreateMovieslistResponse,
  FindByUserIdResponse,
  MOVIELIST_SERVICE_NAME,
  MovielistServiceClient,
  findByUserIdRequest,
} from './movielist.pb';

@Controller('movielist')
export class MovielistController implements OnModuleInit {
  private svc: MovielistServiceClient;

  @Inject(MOVIELIST_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<MovielistServiceClient>(
      MOVIELIST_SERVICE_NAME,
    );
  }

  @Post('create')
  // @UseGuards(AuthGuard)
  private async createMovieList(
    @Body() body: CreateMovielistRequest,
  ): Promise<Observable<CreateMovieslistResponse>> {
    return this.svc.createMovielist(body);
  }

  @Get('findByUserId')
  // @UseGuards(AuthGuard)
  private async findMovieListByUserId(
    @Body() body: findByUserIdRequest,
  ): Promise<Observable<FindByUserIdResponse>> {
    return this.svc.findMovielistByUserId(body);
  }
}
