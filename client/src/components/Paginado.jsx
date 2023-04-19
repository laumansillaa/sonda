export const Paginado = ({ productsPerPage, allProducts, paginado }) => {
  console.log("ALL PRODUCTS", allProducts);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex justify-center gap-4">
      {pageNumber &&
        pageNumber.map((number) => {
          return (
            <a
            href="#prod-top"
              key={number}
              onClick={() => paginado(number)}
              className="w-8 h-8 p-2 bg-btn-blue cursor-pointer rounded-full text-white font-semibold flex items-center justify-center hover:shadow-4xl"
            >
              <div>{number}</div>
            </a>
          );
        })}
    </div>
  );
};
