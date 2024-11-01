import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function NonVeg()
{
    const nonvegproducts=useSelector(state=>state.products.nonveg)
    const dispatch=useDispatch()
    const items=nonvegproducts.map((product,index)=>(
        <li key={index}>
            {product.name}  - ${product.price.toFixed(2)}
            
            <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
            </li>
    )
    )
    return(
        <>
        <h1>this is nonveg page</h1>
        <ul>{items}</ul>
        </>
    )
}
export default NonVeg;