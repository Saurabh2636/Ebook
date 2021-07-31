import React,{Component} from 'react'
import '../index.css'
import home from '../Public/home.jpg'
 class Home extends Component{
  constructor(props){
    super();
    this.state={
      id:''
    }
  }
  setid(e){
    this.setState({
       id:e.target.value,  
    })
    
  }
      abc(e){
      e.preventDefault();
      this.props.history.push(`/detail-book/${this.state.id}`)
      }
 
 render(){
 
    return (
        <>
        <img src={home} alt='homyy' width='100%' height='620px'/>
        <div className="Search" >
          <form  onSubmit={this.abc.bind(this)}>
            <input type="text"placeholder="enter id.." onChange={this.setid.bind(this)}/>
            <button type="submit"> Search</button>
          </form>
          </div>         
        <div className='Home'>  
          <h1 className='Home-heading'><strong> Enjoy Your Library</strong></h1>
          <h2 className='Home-heading-child'> With MyEbook</h2>
          <h3 className='child'>this makes your life easier!!</h3>
        </div> 
        </>
        
    )
}
}
export default Home
