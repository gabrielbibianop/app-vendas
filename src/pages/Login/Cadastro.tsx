import { Header } from "../../components/Header";
export const Login = () => {
  return (
    <div>
      <Header groupType="logo" />

      <div className="px-5 flex h-screen justify-center items-center">
        <div className="">
          <input
            type="text"
            className="mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="Nome"
          />
          <input
            type="text"
            className=" mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="E-mail"
          />
          <input
            type="text"
            className="mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="Senha"
          />
          <input
            type="text"
            className=" mt-3 w-full h-10 text-base border p-6 rounded-full shadow-xl"
            placeholder="Confirmação Senha"
          />
          <button className="mt-8 w-full h-10 text-lg text-white font-semibold border rounded-full shadow-xl bg-blue-600 hover:bg-blue-500">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};
