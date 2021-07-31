import React ,{Component} from 'react'
import axios from 'axios';
import '../index.css'
import home from '../Public/home.jpg'
class  CreateBook extends Component{
    constructor(props){
        super(props)
        this.state={
            title: '',
            author:'',
            description:'',
            published_date:''
        };
    }
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }; 
   
    onSubmit = e => {
        e.preventDefault();
    const data = {
          title: this.state.title,
          author: this.state.author,
          description: this.state.description,
          published_date: this.state.published_date 
    };    
    
  
          
    axios
    .post('http://localhost:8080/api/books', data)
    .then(res => {
        alert("book created")
      this.props.history.push('/')
       })
    .catch(err => {
            console.log("Error in CreateBook!");
          })
        };  
        
    render(){
        return(
        <div>
        <img src={home} alt="home" width='100%' height='620px'/> 
       <div className="formm">
       <form noValidate  onSubmit={this.onSubmit}>
        <label>
            Book Name:
            <input type="text" 
            name="title"
            placeholder="Enter book name.." 
            value={this.state.title}
            onChange={this.onChange}    
            />
        </label>
        <label>
            Author Name:
            <input type="text" 
            name='author'
             value={this.state.author}
            onChange={this.onChange} />
        </label>
        <label>
            Publish Date:
            <input type="date" 
            name="published_date"
            value={this.state.published_date}
            onChange={this.onChange}
            />
        </label>
        <label>
        Description:
            <textarea type="text" rows="5" cols="22"
            name="description"
            value={this.state.description}
            onChange={this.onChange}   
            />
        </label>
        <input type="submit" value="Submit" />
    </form>
       </div>
       
</div>
)    
}
}

export default CreateBook
