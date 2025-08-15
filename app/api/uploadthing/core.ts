import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing<{ userId: string }>();

const handleAuth = async () => {
  return { userId: "docker-test-user"}
};

export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log("Файл загружен:", file.ufsUrl);
    }),
  messageFile: f(["image", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(({ metadata, file }) => {
      console.log("Файл загружен:", file.ufsUrl); 
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;