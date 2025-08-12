/*
  Warnings:

  - You are about to drop the column `profileId` on the `Server` table. All the data in the column will be lost.
  - Added the required column `profileID` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Server" DROP CONSTRAINT "Server_profileId_fkey";

-- DropIndex
DROP INDEX "public"."Server_profileId_idx";

-- AlterTable
ALTER TABLE "public"."Server" DROP COLUMN "profileId",
ADD COLUMN     "profileID" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Server_profileID_idx" ON "public"."Server"("profileID");

-- AddForeignKey
ALTER TABLE "public"."Server" ADD CONSTRAINT "Server_profileID_fkey" FOREIGN KEY ("profileID") REFERENCES "public"."Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
