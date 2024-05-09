import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { DirecentosController } from './controller/direcentos.controller';
import { DirecentosService } from './service/direcentos.service';
import {
  DIRECENTOS_PACKAGE_NAME,
  DIRECENTOS_SERVICE_NAME,
} from './types/folderscentos.pb';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DIRECENTOS_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3010',
          package: DIRECENTOS_PACKAGE_NAME,
          protoPath: join(__dirname, 'protos/direcentos.proto'),
        },
      },
    ]),
  ],
  controllers: [DirecentosController],
  providers: [DirecentosService],
  exports: [DirecentosService],
})
export class DirecentosModule {}
