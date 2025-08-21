import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const currentProfile = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  const profile = await db.profile.findUnique({
    where: {
      userID: userId
    }
  });

  return profile;
}