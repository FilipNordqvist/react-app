import React from "react"



export default function Film(props) {

    const stars = Array.from({length: parseInt(props.item.rating)}, (_,i) => (
        <img key={i} src="/star.png" alt="Star" style={{width: '40px', height: '40px'}}/>
    ));

    return (
           <li className="list-group-item mt-3" style={{display: 'flex', alignItems: 'center', height:'50px', marginRight: '10px'}}>
            <div className="title" style={{flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems:'center', fontSize:'30px',marginRight: '10px'}}>
            { props.item.title }    
            </div>
            
            <div className="stars" style={{flex: 2,display: 'flex', justifyContent: 'center'}}>{stars}</div>

            <div className="delete">
            <button  className="btn btn-sm btn-danger" style={{width: '40px', height: '40px'}} 
                onClick={() => {props.deleteItem(props.item.id)}}> X</button>
            </div>
               
             </li>      
    )
}
