import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('HelloWorldService', 'GetHelloWorld')
  getHelloWorld() {
    return { reply: 'Hello World!'};
  }
}
