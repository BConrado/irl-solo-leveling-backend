import { Injectable } from '@nestjs/common';
import { Prisma, Quest } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestService {
  constructor(private prisma: PrismaService) {}

  async createQuest(data: Prisma.QuestCreateInput): Promise<Quest> {
    return this.prisma.quest.create({data});
  }
}
