import { Header } from "../../components/Header";
export const Login = () => {
  return (
    <div>
      <Header groupType="logo" />

      <div className="px-5 flex h-screen justify-center items-center text-center">
        <div className="">
          <input
            type="text"
            className="shadow-xl mt-20 w-full h-10 text-base border p-6 rounded-full"
            placeholder="Nome"
          />
          <input
            type="text"
            className="shadow-xl mt-3 w-full h-10 text-base border p-6 rounded-full"
            placeholder="Senha"
          />
          <a href="/Home">
            <button className="mt-8 w-full h-10 text-lg text-white font-semibold border rounded-full shadow-xl bg-blue-600 hover:bg-blue-500">
              Login
            </button>
          </a>
          <div className="mt-10 text-blue-400">
            <a href="/Cadastro">Cadastrar-se</a>
          </div>
        </div>
      </div>
    </div>
  );
};
