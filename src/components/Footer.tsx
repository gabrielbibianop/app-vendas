import { useRouter } from "next/router";
type FooterProps = {
  groupType: "default" | "save" | "sell" | "exit";
};
export const Footer = ({ groupType }: FooterProps) => {
  const imageClass = `w-10 h-10`;
  const router = useRouter();
  return (
    <footer className="bg-blue-600 fixed bottom-0 left-0 w-full h-16 flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex justify-around w-full">
          {groupType === "default" && (
            <>
              <button onClick={() => {router.push("/products");}}
                    className="hover:scale-125 hover:shadow-2xl">
                <img className={imageClass} src="images/Box.png" alt="" />
              </button>
              <button className="hover:scale-125 hover:shadow-2xl">
                <img className={imageClass} src="images/Shop.png" alt="" />
              </button>
              <button className="hover:scale-125 hover:shadow-2xl">
                <img className={imageClass} src="images/Sales.png" alt="" />
              </button>
            </>
          )}
          {groupType === "save" && (
            <>
              <button onClick={() => {router.push("/home");}}
               className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Exit.png" alt="" />
              </button>
              <button onClick={() => {router.push("/home");}}
               className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Save.png" alt="" />
              </button>
              <button className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/More.png" alt="" />
              </button>
            </>
          )}
          {groupType === "sell" && (
            <>
              <button onClick={() => {router.push("/home");}}
              className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Exit.png" alt="" />
              </button>
              <button onClick={() => {router.push("/home");}}
               className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Checked.png" alt="" />
              </button>
              <button className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/More.png" alt="" />
              </button>
            </>
          )}
          {groupType === "exit" && (
            <>
              <button onClick={() => {router.push("/home");}}
              className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Exit.png" alt="" />
              </button>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};
