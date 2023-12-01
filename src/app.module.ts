import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movies/movie.module';
import { MovieListModule } from './movielist/movielist.module';
import { MovieListmovieModule } from './movielistmovie/movielistmovie.module';

@Module({
  imports: [AuthModule, MovieModule, MovieListModule, MovieListmovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
