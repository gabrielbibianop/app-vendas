import { useState } from "react";
import { Header } from "../../components/Header";
import { Api } from "../../services/Api";
import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    Api.post("/user", {
      name: name,
      email: email,
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div>
      <Header groupType="logo" />

      <div className="px-5 flex h-screen justify-center items-center">
        <form className="max-w-xl" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="Nome"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className=" mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="E-mail"
            required
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {/* <input
            type="text"
            className="mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="Senha"
          />
          <input
            type="text"
            className=" mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="Confirmação Senha"
          /> */}

          <button className="mt-8 w-full h-10 text-lg text-white font-semibold border rounded-full shadow-xl bg-blue-600 hover:bg-blue-500">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
