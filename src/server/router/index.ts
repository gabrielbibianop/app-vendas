// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { productRouter } from "./product";
import { sellRouter } from "./sell";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("product.", productRouter)
  .merge("sell.", sellRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
