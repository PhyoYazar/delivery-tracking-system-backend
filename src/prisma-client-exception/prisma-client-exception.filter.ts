//src/prisma-client-exception.filter.ts
import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    // console.log(exception);

    switch (exception.code) {
      case 'P2002':
        const conflictStatus = HttpStatus.CONFLICT;
        response.status(conflictStatus).json({
          statusCode: conflictStatus,
          message: message,
        });
        break;

      case 'P2000':
        // Handle P2000 error
        const badRequestStatus = HttpStatus.BAD_REQUEST;
        response.status(badRequestStatus).json({
          statusCode: badRequestStatus,
          message: message,
        });
        break;

      case 'P2025':
        // Handle P2025 error
        const forbiddenStatus = HttpStatus.FORBIDDEN;
        response.status(forbiddenStatus).json({
          statusCode: forbiddenStatus,
          message: message,
        });
        break;

      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }
}
