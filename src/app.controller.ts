import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { userDto } from './userDTO/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  getData(@Body() data:userDto): any {
     return this.appService.postData(data)
  }
}
