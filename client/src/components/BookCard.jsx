import React from 'react';
import '../index.css';
const BookCard = (props) => {
    
    return(
        
        <div className="card-container">
            <div className="card-1">
            
           <li> <strong>Author </strong>: {props.author}</li>
           <li> Title  : {props.title}</li>
           <li> Descri : {props.description} </li>
           <li> Date   : {props.published_date} </li>
           
       </div>
        </div>
    
    )
};

export default BookCard;