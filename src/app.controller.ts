import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { User as UserModel } from '@prisma/client';
@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly userService: UserService,
	) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Post('user')
	async createUser(@Body() userData: { id: number; name: string; level: number }): Promise<UserModel> {
		return this.userService.createUser(userData);
	}
}
