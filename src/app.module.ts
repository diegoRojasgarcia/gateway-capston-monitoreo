import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DirecentosModule } from './direcentos/direcentos.module';

@Module({
  imports: [AuthModule, DirecentosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
