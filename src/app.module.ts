import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';
import { QuestService } from './quest/quest.service';


@Module({
  imports: [UserModule, PrismaModule, QuestModule],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService, QuestService],
})
export class AppModule {}
