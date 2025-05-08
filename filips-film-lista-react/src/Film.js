import React from "react"



export default function Film(props) {


    return (
           <li className="list-group-item mt-3">
            { props.item.title + " Betyg: " + props.item.rating }    

                <button  className="btn btn-sm btn-danger float-end" 
                onClick={() => {props.deleteItem(props.item.id)}}> X</button>
             </li>      
    )
}
