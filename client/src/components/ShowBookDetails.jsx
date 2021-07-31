import React,{Component} from 'react';
import '../index.css'

import axios from 'axios'
import home from '../Public/home.jpg'
class ShowBookDetails  extends Component{
    constructor(props){
        super(props);
        this.state={
            book:{}
        };
        
    
    }
componentDidMount(){
        axios
        .get('http://localhost:8080/api/books/'+this.props.match.params.id)
        .then(res=>{
            this.setState({
                book:res.data,
            })
        })
        .catch(err=>{
            alert("unable to show detail")
            this.props.history.push('/')
        })
    
}
 render(){
 return (
    <div>
      <img src={home} alt='homyy' width='100%' height='620px'/>    
       <div className='formm'>      
            <div className="output-box">
                <div className="out1" ><strong>AUTHOR :</strong>{this.state.book.title}</div>
                <div className="out2"><strong>TITLE  :</strong>{this.state.book.author}</div>
                <div className="out3"><strong>DATE  :</strong>{this.state.book.published_date}</div>
                <div className="out4"><strong>DESCRI:   :</strong>{this.state.book.description}</div>
            </div>     
        </div>   
    </div>
    )
    }
}

export default ShowBookDetails
