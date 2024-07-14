import { Prisma } from "@prisma/client";
import { ExpirationDateInPastError } from "./quest.error";

export class QuestValidations {

  static async isExpirationDateInPast( { expirationTime } : Prisma.QuestCreateInput ): Promise<void> {
    const dateNow = new Date().toISOString();

    if (!!expirationTime && expirationTime < dateNow){
      throw new ExpirationDateInPastError();
    }
  }
}