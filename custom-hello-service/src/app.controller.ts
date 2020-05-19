import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('CustomHelloService', 'GetCustomHello')
  getCustomHello(data: any) {
    return { reply: `Hello ${data.data}!` };
  }
}
