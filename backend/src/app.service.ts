import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const myEnvVar = this.configService.get<string>('BLOGGER_API_KEY');
    return myEnvVar;
  }

  isBloggerApiKeyValid(): boolean {
    const myEnvVar = this.configService.get<string>('BLOGGER_API_KEY');
    if (!myEnvVar) {
      return false;
    }
  }
}
