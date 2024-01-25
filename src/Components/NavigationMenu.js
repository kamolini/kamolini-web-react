import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props){
    return(
        <div>
            <div className="fixed bg-white top-50 left-0 w-4/5  z-50 shadow"> 
                <div className="font-bold py-3">
                    This is the menu
                </div>
                <ul >
                    <li >
                        <Link 
                            to="/" 
                            className="text-blue-500 py-3 border-t border-b block"
                            onClick = { props.closeMenu}
                            > 
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link 
                            to="/About" 
                            className="text-blue-500 py-3 border-b block"
                            onClick = { props.closeMenu}
                            > 
                            About
                        </Link>
                    </li>
                    
                </ul>
            
            </div>
            
        </div>
    )
}

export default NavigationMenu