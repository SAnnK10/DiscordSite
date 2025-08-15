// app/api/uploadthing/route.ts
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// ✅ Для App Router с uploadthing v7+
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});