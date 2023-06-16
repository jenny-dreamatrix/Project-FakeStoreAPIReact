import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState} from "react";
import './ProductDetail.css'

const ProductDetail = () => {

    const idParam = useParams()

    const apiURL = `https://fakestoreapi.com/products/${idParam.id}`
    const [shopData, setShopData] = useState()

    useEffect(() => {
        fetch(apiURL)
        .then((res) => res.json())
        .then(shopData => setShopData(shopData))
        .catch((err) => console.log(`Fehler: ${err}`))
    }, [])

    console.log(idParam);
    console.log(shopData);

    return ( 
        <>
        <Header/>
        {shopData ? (
        <section className="detail-sec">
            <img src={shopData.image} alt={shopData.title} />
            <h2>{shopData.title}</h2>
            <h3>{shopData.price} €</h3>
            <p>{shopData.description}</p>
        </section>
        ) : (
            <p>Loading...</p>
        )}
        </>
     );
}
 
export default ProductDetail;