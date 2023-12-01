import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MOVIELIST_PACKAGE_NAME, MOVIELIST_SERVICE_NAME } from './movielist.pb';
import { MovielistController } from './movielist.controller';
import { join } from 'path';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MOVIELIST_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3005',
          package: MOVIELIST_PACKAGE_NAME,
          protoPath: join(__dirname, 'protos/movielist.proto'),
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [MovielistController],
})
export class MovieListModule {}
