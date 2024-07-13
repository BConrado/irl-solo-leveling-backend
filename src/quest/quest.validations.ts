import { Prisma } from "@prisma/client";
import { ExpirationDateInPastError } from "./quest.error";

export class QuestValidations {

  static async isExpirationDateInPast( { expirationTime } : Prisma.QuestCreateInput ): Promise<void> {
    console.log("expirationTime " + expirationTime);
    console.log(Date.now() + " Date now");
    // if (expirationTime?.toLocaleString()){
    //   throw new ExpirationDateInPastError();
    // }
  }
}