import { Header } from "../components/Header";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Inicial = () => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <div>
      <Header groupType="logo" />

      <div className="mx-10 mt-10 flex h-screen justify-center items-center text-center">
        <div>
          <h1 className="text-5xl font-semibold text-blue-600">
            Seja Bem Vindo
          </h1>
          <h1 className="pt-10 text-2xl text-gray-700">
            Este é um site exclusivo feito para{" "}
            <span className="text-blue-600 font-bold">Empreendedores</span> que
            necessitam de uma solução para ter o melhor controle sobre suas
            finanças, uma ótima ferramenta para o dia a dia.
          </h1>

          <button
            onClick={() => {
              if (status === "unauthenticated") {
                signIn();
              } else {
                router.push("/home");
              }
            }}
            className="mt-8 w-80 h-10 text-lg text-white font-semibold border rounded-full shadow-xl bg-blue-600 hover:bg-blue-500"
          >
            Começar
          </button>

          <footer className="bg-blue-600 fixed bottom-0 left-0 w-full h-5 flex justify-center items-center">
            <p className="text-white text-xs">Totalmente Gratuito</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Inicial;
