import { Injectable } from '@nestjs/common';
import { userDto } from './userDTO/user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postData(data:userDto): any {
    return console.log('data',data)
  }
}
