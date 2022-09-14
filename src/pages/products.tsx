import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React, { useState } from 'react';
import Select from 'react-select';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log({
    session,
    status,
  });

  const { data: products, refetch } = trpc.useQuery(["product.getProducts"]);

  const productsOptions = products?.map((products) => ({
    value: products.id,
    label: products.description,
  }));

  const [selectedProduct,setSelectedProduct] = useState<string>();

  const productMutation = trpc.useMutation("product.createProduct");
  const sellMutation = trpc.useMutation("sell.sell");

  return (
    <div className="mt-24 flex justify-around">
      <Header groupType="products" />
      <Footer groupType="save"/>
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
         <Select
         options={productsOptions}
         value={productsOptions?.find((option)=> option.value)=== selectedProduct}
         onChange={(option) => 
         setSelectedProduct(option?.value)}         
         />
         
        <div className=" flex-row justify-around w-80">
        <input
          className="border p-2 mt-2 rounded-full shadow-lg w-full"
          type="text"
          name="description"
          placeholder="Descrição"
        />
        <div className="">
        <input
          className="border p-2 mt-2 rounded-full shadow-lg w-28"
          type="number"
          name="cost"
          placeholder="Custo"
        />
        <input
          className="border p-2 mt-2 ml-24 rounded-full shadow-lg w-28"
          type="number"
          name="stock"
          placeholder="Estoque"
        />
        </div>
        <input
          className="border p-2 mt-2 rounded-full shadow-lg w-full"
          type="number"
          name="price"
          placeholder="Preço"
        />
        </div>
        </form>
    </div>
  );
};

export default Home;
