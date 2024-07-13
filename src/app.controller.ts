import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { Prisma, User as UserModel } from '@prisma/client';
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
	async createUser(@Body() userData: Prisma.UserCreateInput): Promise<UserModel> {
		return this.userService.createUser(userData);
	}

	@Get('users')
	async getUsers(): Promise<UserModel[]> {
		return this.userService.users({});
	}
}
