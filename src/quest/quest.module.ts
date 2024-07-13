import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [QuestService, PrismaClient, PrismaService]
})
export class QuestModule {}
