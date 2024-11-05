import ItemList from "./item-list";







export default function Item(name, quantity, category, onSelect)
{


return(
    <div>
        <ul onClick={onSelect}>

            <li>{item}</li>
        </ul>
        
        
    </div>
);
}
