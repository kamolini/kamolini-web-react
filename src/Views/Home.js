import React from "react";
import Loader from "../Components/loader";
 import ProductCard from "../Components/ProductCard";
 import {
    Link
  } from 'react-router-dom'
import useAxcioGet from "../Hooks/HttpRequest";

function Home(){

    const url = `https://659f09665023b02bfe89376a.mockapi.io/api/v1/Product?page=1&limit=5`
    
        let products = useAxcioGet(url)

        let content = null;

        if(products.error){
            content = 
                <p> Product not available</p>
        }
    
        if(products.loading){
            content = 
                <Loader></Loader>
        }

        if(products.data){
            content =  
                products.data.map((product)=>
                <div key={product.id}>
                    <ProductCard 
                        product={product}
                    />
                </div>
                )
            
        }


    return (

        <Link>
            <h1 className='font-bold text-2xl'> Best Seller</h1>
            {content}
        </Link>
    )
}

export default Home