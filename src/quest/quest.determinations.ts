import { Prisma } from "@prisma/client"

export class QuestDeterminations { 
  //private constructor() {}

  static async setAcceptedTime(questData: Prisma.QuestCreateInput): Promise<void>{
    questData.acceptedTime = Date.now().toString();
  }

  static async clearAcceptedTime(questData: Prisma.QuestCreateInput): Promise<void>{
    questData.acceptedTime = '';
  }
}
