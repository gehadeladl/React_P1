import React , {Component} from 'react'
import TodoItem from './Component/TodoItem/TodoItem'
import AddItem from './Component/AddItem/AddItem'
import './App.css'
class App extends Component{
  state = {
    Items : [
      {id : 1 , name: "eslam" , age: 26},
      {id : 2 , name: "gehad" , age: 24},
      {id : 3 , name: "waled" , age: 20}
    ]
  }
  deletItems = (id) => {
    let items = this.state.Items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i , 1)
    this.setState({items})
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.Items;
    items.push(item)
    this.setState({items})
  }
  render(){
    return(
      <div className="App container">
        <TodoItem items ={this.state.Items} deletItems={this.deletItems}/>
        <AddItem addItem = {this.addItem}/>
      </div>
    )
  }
}
export default App;
