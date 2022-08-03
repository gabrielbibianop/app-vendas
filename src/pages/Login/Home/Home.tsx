import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
export const Home = () => {
  return (
    <div>
      <Header groupType="logo" />

      <div className="px-5 flex h-screen justify-center items-center">
        <div></div>
      </div>

      <Footer groupType="default" />
    </div>
  );
};
