import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movies/movie.module';
import { MovieListModule } from './movielist/movielist.module';

@Module({
  imports: [AuthModule, MovieModule, MovieListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
