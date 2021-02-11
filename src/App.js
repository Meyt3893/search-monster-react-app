import './App.css';
import {CardList} from './components/card-list/card-list.component'
import { Component } from 'react';
import {SearchBox} from './components/search-box/search-box.component'

 class App extends Component {
   constructor() {
   super();

  this.state = {
    monsters: [],
    serachFiels:''
  };

}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}))
}

hendleChange =(e) =>
{
  this.setState({serachFiels:e.target.value})
}

render() {
  const { monsters, serachFiels}=this.state;
 const filteredMonstered = monsters.filter(monster => 
  monster.name.toLowerCase().includes(serachFiels.toLowerCase()));
  return(
    <div className='App'>
      <h2>Monsters Roladex</h2>
      <SearchBox placeholder = 'search monster' handleChange={this.hendleChange}/>
      <CardList monsters = {filteredMonstered} >
      </CardList>
    </div>
  )
}
}
export default App;
