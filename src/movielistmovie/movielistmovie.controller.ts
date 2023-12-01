import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthGuard } from '../auth/auth.guard';
import {
  CreateMovielistMovieRequest,
  CreateMovielistMovieResponse,
  GetMoviesResponse,
  MOVIELISTMOVIE_SERVICE_NAME,
  MovielistmovieServiceClient,
  getMoviesRequest,
} from './movielistmovie.pb';

@Controller('movielistmovie')
export class MovielistMovieController implements OnModuleInit {
  private svc: MovielistmovieServiceClient;

  @Inject(MOVIELISTMOVIE_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<MovielistmovieServiceClient>(
      MOVIELISTMOVIE_SERVICE_NAME,
    );
  }

  @Post('create')
  //   @UseGuards(AuthGuard)
  private async createMovieListmovie(
    @Body() body: CreateMovielistMovieRequest,
  ): Promise<Observable<CreateMovielistMovieResponse>> {
    return this.svc.createMovielistmovie(body);
  }

  @Get('findMoviesByIdMovielist')
  // @UseGuards(AuthGuard)
  private async findMoviesByIdMovielist(
    @Body() body: getMoviesRequest,
  ): Promise<Observable<GetMoviesResponse>> {
    return this.svc.getMoviesByIdMovielist(body);
  }
}
