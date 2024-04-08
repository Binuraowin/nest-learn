// logger.service.ts
import { Injectable, Logger as NestLogger } from '@nestjs/common';

@Injectable()
export class Logger {
  private readonly nestLogger = new NestLogger();

  log(message: string, context?: string) {
    this.nestLogger.log(message, context);
    // Add additional logic or integrate with third-party logger here
  }

  error(message: string, trace: string, context?: string) {
    this.nestLogger.error(message, trace, context);
    // Add additional logic or integrate with third-party logger here
  }

  warn(message: string, context?: string) {
    this.nestLogger.warn(message, context);
    // Add additional logic or integrate with third-party logger here
  }

  // Add more logging methods as needed (info, debug, verbose, etc.)
}
