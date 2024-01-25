import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import NavigationMenu from './NavigationMenu'




function Navigation(){

    const [showMenu, setShowMenu] = useState(false)

    let menu 
    let menuMask

    if(showMenu){
        menu = <NavigationMenu 
        closeMenu = {()=> setShowMenu(!showMenu)}
        />
        menuMask = <div className="bg-black-t-50 fixed top-50 left-0 h-full w-full z-50"
                onClick = {()=> setShowMenu(false)}
                >
            </div>
        
    }

    return(
        <nav >
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={()=> setShowMenu(!showMenu)}
                />
            </span>

            {menuMask}
            {menu}
            
        </nav>
    )
}

export default Navigation