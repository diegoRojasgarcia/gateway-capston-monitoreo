import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthModule } from 'src/auth/auth.module';
import {
  MOVIELISTMOVIE_PACKAGE_NAME,
  MOVIELISTMOVIE_SERVICE_NAME,
} from './movielistmovie.pb';
import { MovielistMovieController } from './movielistmovie.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MOVIELISTMOVIE_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3015',
          package: MOVIELISTMOVIE_PACKAGE_NAME,
          protoPath: join(__dirname, 'protos/movielistmovie.proto'),
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [MovielistMovieController],
})
export class MovieListmovieModule {}
