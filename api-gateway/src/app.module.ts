import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register(
    [
      {
        name: 'HELLO_WORLD_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'hello',
          protoPath: join(__dirname, './protos/hello-world.proto'),
        },
      },
      {
        name: 'CUSTOM_HELLO_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'customHello',
          protoPath: join(__dirname, './protos/custom-hello.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
