import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, User as UserModel, Quest as QuestModel } from '@prisma/client';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { QuestService } from './quest/quest.service';
import { QuestDeterminations } from './quest/quest.determinations';
import { QuestValidations } from './quest/quest.validations';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly userService: UserService,
		private readonly questService: QuestService
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

	@Post('quest')
	async createQuest(@Body() questData: Prisma.QuestCreateInput): Promise<QuestModel> {
		await QuestDeterminations.clearAcceptedTime(questData);
		console.log(JSON.stringify(questData));
		await QuestValidations.isExpirationDateInPast(questData);
		questData.acceptedTime = new Date();
		return this.questService.createQuest(questData);
	}
}
