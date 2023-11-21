import {
  Controller,
  Get,
  Inject,
  OnModuleInit,
  UseGuards,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthGuard } from '../auth/auth.guard';
import {
  MOVIE_SERVICE_NAME,
  MovieServiceClient,
  getMoviesResponse,
  Empty,
} from './movie.pb';

@Controller('movie')
export class MovieController implements OnModuleInit {
  private svc: MovieServiceClient;

  @Inject(MOVIE_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<MovieServiceClient>(MOVIE_SERVICE_NAME);
  }

  @Get('/getMovies')
  @UseGuards(AuthGuard)
  private async getMovies(): Promise<Observable<getMoviesResponse>> {
    return this.svc.getMovies({});
  }
}
