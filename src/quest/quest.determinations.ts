import { Prisma } from "@prisma/client"

export class QuestDeterminations { 

  static async setAcceptedTime(questData: Prisma.QuestCreateInput): Promise<void>{
    questData.acceptedTime = new Date().toISOString();
  }

  static async clearAcceptedTime(questData: Prisma.QuestCreateInput): Promise<void>{
    questData.acceptedTime = "";
  }
}
