import React from "react";
import Navigation from "./Navigation";



function Header(){
    return(
        <header className="border-b p-3 flex justify-between items-center">
            <a href="/" >     
                <img src="../../kamolini.png" width="50" height="50"/>
            </a>
            <Navigation/>
        </header>
    )
}


export default Header