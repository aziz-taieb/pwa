import { Injectable,Param } from '@nestjs/common';
import { HelloMessage } from '../HelloMessage';
@Injectable()
export class AppService {
  getHello(name: string): HelloMessage {
     return {"hello":name} ;
  }

}

