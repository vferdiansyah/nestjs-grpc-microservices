import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello-world')
  getHelloWorld() {
    return this.appService.getHelloWorld();
  }

  @Get('custom-hello')
  getCustomHello(@Query('q') q: string) {
    return this.appService.getCustomHello(q);
  }
}
