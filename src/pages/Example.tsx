import { useQuery } from "@tanstack/react-query";
import { Api } from "../services/Api";
import { IProduct } from "../types/Products";

export const Example = () => {
  const { data, isLoading } = useQuery<IProduct[]>(["products"], () =>
    Api.get("/product").then((r) => r.data)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{data?.[0]?.description}</div>;
};
