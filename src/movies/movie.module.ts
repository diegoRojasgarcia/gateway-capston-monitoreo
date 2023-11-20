import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MOVIE_PACKAGE_NAME, MOVIE_SERVICE_NAME } from './movie.pb';
import { MovieController } from './movie.controller';
import { join } from 'path';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MOVIE_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3005',
          package: MOVIE_PACKAGE_NAME,
          protoPath: join(__dirname, 'protos/movie.proto'),
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [MovieController],
})
export class MovieModule {}
