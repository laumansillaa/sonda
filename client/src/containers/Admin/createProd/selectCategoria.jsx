import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import "./styles/selectCategoria.css";

export const SelectCategoria = ({ setInput, input }) => {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);

  const handleSelect = (e) => {
    setInput({
      ...input,
      categoria: e.target.name,
    });
  };

  return (
    <div id="cont-select-categ" {...buttonProps}>
      {input.categoria || "Seleccione categoria"}
      <div
        className={isOpen ? "visible" : ""}
        role="menu"
        id="select-categoria"
      >
        <a
          {...itemProps[1]}
          id="item-categ"
          name="Cromatografos"
          onClick={(e) => handleSelect(e)}
        >
          Cromatografos
        </a>
        <a
          {...itemProps[2]}
          id="item-categ"
          name="Analizadores de gases de proceso"
          onClick={(e) => handleSelect(e)}
        >
          Analizadores de gases de proceso
        </a>
        <a
          {...itemProps[3]}
          id="item-categ"
          name="Computadores de caudal de gas natural"
          onClick={(e) => handleSelect(e)}
        >
          Computadores de caudal de gas natural
        </a>
        <a
          {...itemProps[4]}
          id="item-categ"
          name="Detectores de gases y de llama"
          onClick={(e) => handleSelect(e)}
        >
          Detectores de gases y de llama
        </a>
        <a
          {...itemProps[5]}
          id="item-categ"
          name="Válvulas"
          onClick={(e) => handleSelect(e)}
        >
          Válvulas
        </a>
        <a
          {...itemProps[6]}
          id="item-categ"
          name="Filtros"
          onClick={(e) => handleSelect(e)}
        >
          Filtros
        </a>
        <a
          {...itemProps[7]}
          id="item-categ"
          name="Fitting"
          onClick={(e) => handleSelect(e)}
        >
          Fitting
        </a>
        <a
          {...itemProps[8]}
          id="item-categ"
          name="Tubería"
          onClick={(e) => handleSelect(e)}
        >
          Tubería
        </a>
        <a
          {...itemProps[9]}
          id="item-categ"
          name="Otros"
          onClick={(e) => handleSelect(e)}
        >
          Otros
        </a>
      </div>
    </div>
  );
};
