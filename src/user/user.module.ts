import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
	providers: [UserService, PrismaClient, PrismaService],
})
export class UserModule {}
