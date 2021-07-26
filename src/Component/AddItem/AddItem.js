import React , {Component} from 'react'
import './AddItem.css'
class AddItem extends Component{
  state = {
    name : '' ,
    age : ''
  }
  handelChang = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  } 
  handelSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === ''){
      return false
    }else{
      this.props.addItem(this.state)
      this.setState({
      name : '', 
      age : ''
    })
    }
  }
  render(){
    return(
      <div>
       <form onSubmit={this.handelSubmit} className="row inp">
          <input type="text" placeholder="Enter name ......." id="name" onChange={this.handelChang} value={this.state.name} className="col-7" /> 
          <input type="number" placeholder="Enter number ......." id="age" onChange={this.handelChang} value={this.state.age} className="col-3"/> 
          <input type="submit" value="Add" className="col-2"/>
       </form> 
     </div>
    )
  }
}

export default AddItem;
