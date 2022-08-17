import { createProtectedRouter } from "./protected-router";
import { z } from "zod";

export const productRouter = createProtectedRouter()
  .query("getProductById", {
    input: z.string(),
    resolve({ ctx, input }) {
      return ctx.prisma.product.findFirst({
        where: {
          id: input,
        },
      });
    },
  })
  .query("getProducts", {
    resolve({ ctx }) {
      return ctx.prisma.product.findMany();
    },
  })
  .mutation("createProduct", {
    input: z.object({
      description: z.string(),
      cost: z.number().min(0.0),
      price: z.number().min(0.0),
      stock: z.number().min(0),
    }),
    resolve({ ctx, input }) {
      return ctx.prisma.product.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
    },
  })
  .mutation("updateProduct", {
    input: z.object({
      id: z.string(),
      description: z.string(),
      cost: z.number().min(0.0),
      price: z.number().min(0.0),
      stock: z.number().min(0),
    }),
    resolve({ ctx, input }) {
      const { id, ...rest } = input;

      return ctx.prisma.product.update({
        where: {
          id: id,
        },
        data: {
          ...rest,
        },
      });
    },
  })
  .mutation("deleteProduct", {
    input: z.string(),
    resolve({ ctx, input }) {
      return ctx.prisma.product.delete({
        where: {
          id: input,
        },
      });
    },
  });
