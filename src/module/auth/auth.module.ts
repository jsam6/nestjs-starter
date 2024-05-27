import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PlayerModule } from '../player/player.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
    imports: [
      PlayerModule,
      JwtModule.register({
        global: true,
        secret: "secret",
        signOptions: { expiresIn: '7d' },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard}],
    exports: [AuthService],
})
export class AuthModule {}
