import { Link } from "react-router-dom";
import './ProductItem.css'

const ProductItem = (props) => {
    return ( 
        <article>
            <img src={props.shopitem.image} alt={props.shopitem.title} />
            <h2>{props.shopitem.title}</h2>
            <p>{props.shopitem.price} €</p>
            <Link to={`/products/${props.shopitem.id}`}>Read more</Link>
        </article>
     );
}
 
export default ProductItem;