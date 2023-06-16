import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import './ProductList.css'

const ProductList = () => {

    const apiURL = "https://fakestoreapi.com/products"
    const [shopData, setShopData] = useState()

    useEffect(() => {
        fetch(apiURL)
        .then((res) => res.json())
        .then(shopData => setShopData(shopData))
        .catch((err) => console.log(`Fehler: ${err}`))
    }, [])

    console.log(shopData);

    return ( 
        <>
        <Header/>
        <main>
            {shopData ? (
            <section className="list-sec">
            {shopData.map((shopitem, index) => {return <ProductItem shopitem={shopitem} key={index} />})}
            </section>
            ) : (
            <p>Loading...</p>
            )
            }
        </main>
        </>
     );
}

export default ProductList;