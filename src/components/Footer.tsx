type FooterProps = {
  groupType: "default" | "crudSave" | "sell" | "exit";
};
export const Footer = ({ groupType }: FooterProps) => {
  const imageClass = `w-10 h-10 md:scale-50`;
  return (
    <footer className="bg-blue-600 fixed bottom-0 left-0 w-full h-14 flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex justify-around w-full">
          {groupType === "default" && (
            <>
              <button className="hover:scale-125 hover:shadow-2xl">
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
          {groupType === "crudSave" && (
            <>
              <button className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Box.png" alt="" />
              </button>
              <button className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Shop.png" alt="" />
              </button>
              <button className="hover:scale-125 hover:shadow-2xl">
                <img className="scale-50" src="images/Sales.png" alt="" />
              </button>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};
