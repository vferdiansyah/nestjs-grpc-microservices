import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface HelloWorldService {
  getHelloWorld(data: any): Observable<any>;
}

interface CustomHelloService {
  getCustomHello(data: any): Observable<any>;
}

@Injectable()
export class AppService implements OnModuleInit {
  private helloWorldService: HelloWorldService;
  private customHelloService: CustomHelloService;

  constructor(
    @Inject('HELLO_WORLD_SERVICE') private helloWorldClient: ClientGrpc,
    @Inject('CUSTOM_HELLO_SERVICE') private customHelloClient: ClientGrpc
  ) {}

  onModuleInit() {
    this.helloWorldService = this.helloWorldClient.getService<HelloWorldService>('HelloWorldService');
    this.customHelloService = this.customHelloClient.getService<CustomHelloService>('CustomHelloService');
  }

  getHelloWorld() {
    return this.helloWorldService.getHelloWorld({});
  }

  getCustomHello(data: string) {
    return this.customHelloService.getCustomHello({ data });
  }
}
