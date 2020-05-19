import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'customHello',
      protoPath: join(__dirname, './protos/custom-hello.proto'),
    },
  });
  await app.listen(() => logger.log('Custom Hello service is listening...'));
}
bootstrap();
