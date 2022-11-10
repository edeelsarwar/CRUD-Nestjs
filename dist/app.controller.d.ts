import { AppService } from './app.service';
import { userDto } from './userDTO/user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getData(data: userDto): any;
}
