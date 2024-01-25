import React from "react";
import { useParams} from 'react-router-dom'
import Loader from "../Components/loader";
import useAxcioGet from "../Hooks/HttpRequest";

function Product(){

    const {id} = useParams()
    const url = `https://659f09665023b02bfe89376a.mockapi.io/api/v1/Product/${id}`

    let product = useAxcioGet(url)
    let content = null

    if(product.error){
        content = 
            <p> Product not available</p>
    }

    if(product.loading){
        content = 
            <Loader></Loader>
    }

    if(product.data){
        content =  
            <div>
                <h1 className='font-bold text-2xl'> {product.data.name}</h1>
                <div>
                    <img 
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div >
                        {product.data.description}
                </div>
            </div>
        
    }

    return (
        <div>
            {content}
        </div>
    )
        
}

export default Product