import React,{Component} from 'react'
import '../index.css'
import BookCard from './BookCard'
import axios from 'axios'
class ShowBookList extends Component{
    constructor(props){
        super(props);
        this.state={
        books:[]    
        };
    }
    componentDidMount() {
            axios
              .get('http://localhost:8080/api/books')
              .then(res => {
                this.setState({
                  books: res.data
                })
              })
              .catch(err =>{
                alert('Error from ShowBookList');
              })
              
          };       
          
    render(){
        const books=this.state.books;
        console.log(books)
        let bookList;
        if(!books) {
            bookList = "there is no book record!";
            alert(bookList)
          } else {
            bookList = books.map((books, k) =>{
              return(
                <BookCard author={books.author} 
                title={books.title} 
                description={books.description}
                published_date={books.published_date} key={k} />
              )
            }
          );    
       }         
    return ( 
     <div  className="booklist" >
        <div className="list">
          <div>{bookList}</div>
       </div>
       </div>
   )
 }
}
export default ShowBookList
