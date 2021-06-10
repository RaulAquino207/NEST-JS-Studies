import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('description')
  getDescription(): any { 
    return this.appService.getDescription();
  }
}
