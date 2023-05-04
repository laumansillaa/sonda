import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import './styles/selectProv.css'

export const SelectProv = ({input, setInput}) => {

    const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
    const handleSelect = (e) => {
        setInput({
            ...input,
            prov: e.target.name
        })
      };

    return (
        <div id='cont-select-prov' {...buttonProps} >
            {input.prov || "Seleccione un proveedor"}
            <div  >
                <div className={isOpen ? 'visible' : ''} role='menu' id='select-prov'>
                    <a {...itemProps[1]} id='item-prov' name='fitok' onClick={(e) => handleSelect(e)} >Fitok</a>
                    <a {...itemProps[2]} id='item-prov' name='emerson' onClick={(e) => handleSelect(e)}>Emerson</a>
                </div>
            </div>
        </div>
    )
}