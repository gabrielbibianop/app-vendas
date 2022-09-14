import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log({
    session,
    status,
  });

  const { data: products, refetch } = trpc.useQuery(["product.getProducts"]);

  const productMutation = trpc.useMutation("product.createProduct");
  const sellMutation = trpc.useMutation("sell.sell");

  if (!session) {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <div>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
      <h2 className="mt-12 text-2xl">Produtos</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          // get the form data
          const formData = new FormData(e.target as HTMLFormElement);

          productMutation.mutate(
            {
              description: formData.get("description") as string,
              cost: parseFloat(formData.get("cost") as string),
              price: parseFloat(formData.get("price") as string),
              stock: parseFloat(formData.get("stock") as string),
            },
            {
              onSettled: () => {
                refetch();
              },
            }
          );
        }}
      >
        <input
          className="border p-2 m-2"
          type="text"
          name="description"
          placeholder="Descrição"
        />
        <input
          className="border p-2 m-2"
          type="number"
          name="cost"
          placeholder="Custo"
        />
        <input
          className="border p-2 m-2"
          type="number"
          name="stock"
          placeholder="Estoque"
        />
        <input
          className="border p-2 m-2"
          type="number"
          name="price"
          placeholder="Preço"
        />
        <button type="submit">Create</button>
      </form>
      <table className="mt-6 w-full text-left">
        <thead>
          <tr>
            <th>id</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Price</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.description}</td>
              <td>{product.cost.toString()}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ................................................... */}
      <h2 className="mt-12 text-2xl">Venda</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          // get the form data
          const formData = new FormData(e.target as HTMLFormElement);

          sellMutation.mutate(
            {
              customer_name: formData.get("customer_name") as string,
              products: [
                {
                  id: formData.get("product_id_1") as string,
                  quantity: parseInt(
                    formData.get("product_quantity_1") as string
                  ),
                },
                {
                  id: formData.get("product_id_2") as string,
                  quantity: parseInt(
                    formData.get("product_quantity_2") as string
                  ),
                },
              ],
            },
            {
              onSettled: () => {},
            }
          );
        }}
      >
        <input
          className="border p-2 m-2"
          type="text"
          name="customer_name"
          placeholder="Nome do Cliente"
        />
        <input
          className="border p-2 m-2"
          type="text"
          name="product_id_1"
          placeholder="Código Produto 1"
        />
        <input
          className="border p-2 m-2"
          type="number"
          name="product_quantity_1"
          placeholder="Quantidade Produto 1"
        />

        <input
          className="border p-2 m-2"
          type="text"
          name="product_id_2"
          placeholder="Código Produto 2"
        />
        <input
          className="border p-2 m-2"
          type="number"
          name="product_quantity_2"
          placeholder="Quantidade Produto 2"
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Home;
