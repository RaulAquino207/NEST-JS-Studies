import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  getDescription(): any {
    let info = {
      name: "Raul Aquino",
      description: "API for NEST JS studies."
    }
    return info;
  }
}
