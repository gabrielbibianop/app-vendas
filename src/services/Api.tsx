import Axios from "axios";

export const Api = Axios.create({
  baseURL: "http://localhost:3333",
});

/*Api.post(
  "/product", {
    "description": "Brinco branco",
    "custo": 16,
    "estoque": 2,
    "preco": 28
}
)*/
