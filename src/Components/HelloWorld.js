import React from "react";



// function HelloHorld(props){
//     return(
//         <h1>Hellow {p.name}</h1>
//     )
// }

class HelloHorld extends React.Component{
    render(){
        return(
            <h1>Hello! {this.props.name}</h1>
        )
    }
    
}

export default HelloHorld;