import { Catch, HttpException, HttpStatus } from "@nestjs/common";

@Catch(HttpException)
export class ExpirationDateInPastError extends HttpException {
  constructor() {
    super('Cannot set expiration date in past ', HttpStatus.BAD_REQUEST);
  }
} 