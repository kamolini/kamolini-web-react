import React, { useState } from "react";




function Counter(props){
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>Test</p>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1) }>
                Plus
            </button>
        </div>
    )
}



export default Counter;