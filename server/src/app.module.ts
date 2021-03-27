import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { MessageGateway } from './message/message.gateway';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [AppService, MessageGateway],
})
export class AppModule {}
