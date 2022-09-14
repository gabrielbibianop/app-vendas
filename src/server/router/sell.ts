import { createProtectedRouter } from "./protected-router";
import { z } from "zod";

export const sellRouter = createProtectedRouter().mutation("sell", {
  input: z.object({
    products: z
      .array(
        z.object({
          id: z.string(),
          quantity: z.number().min(0),
        })
      )
      .min(1),
    customer_name: z.string(),
  }),
  async resolve({ ctx, input }) {
    const sell = await ctx.prisma.sell.create({
      data: {
        sellerId: ctx.session.user.id,
        customer_name: input.customer_name,
        SellProduct: {
          createMany: {
            data: input.products.map((product) => ({
              productId: product.id,
              quantity: product.quantity,
            })),
          },
        },
      },
      include: {
        SellProduct: {
          include: {
            product: true,
          },
        },
      },
    });

    if (sell) {
      for (const sellProduct of sell.SellProduct) {
        await ctx.prisma.product.update({
          where: {
            id: sellProduct.productId,
          },
          data: {
            stock: sellProduct.product.stock - sellProduct.quantity,
          },
        });
      }
    }

    return sell;
  },
});
