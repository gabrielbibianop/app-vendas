type HeaderProps = {
  groupType: "logo" | "products" | "insert" | "sell" | "items";
};
export const Header = ({ groupType }: HeaderProps) => {
  return (
    <header className="bg-blue-600 fixed top-0 left-0 w-full flex justify-center items-center shadow-lg">
      <div className="w-full max-w-md">
        <div className="flex justify-around w-full">
          {groupType === "logo" && (
            <>
              <div className="h-14">
                <img className="" src="public/images/Logo.png" alt="" />
              </div>
            </>
          )}
          {groupType === "products" && (
            <>
              <div className="h-6">
                <h1 className="text-white font-Semibold">Produtos</h1>
              </div>
            </>
          )}
          {groupType === "insert" && (
            <>
              <div className="h-6">
                <h1 className="text-white font-Semibold">Inserir Produtos</h1>
              </div>
            </>
          )}
          {groupType === "sell" && (
            <>
              <div className="h-6">
                <h1 className="text-white font-Semibold">Vender</h1>
              </div>
            </>
          )}
          {groupType === "items" && (
            <>
              <div className="h-6">
                <h1 className="text-white font-Semibold">Itens da Venda</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
