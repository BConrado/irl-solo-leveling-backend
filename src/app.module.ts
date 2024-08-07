import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
	imports: [UserModule, PrismaModule],
	controllers: [AppController],
	providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
