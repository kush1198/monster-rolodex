import logo from './logo.svg';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components'
import {SearchBox} from './components/search-box/search-box.component'
import {FunButton} from './components/fun-button/fun-button.component'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users}));
  }
  render(){
    const {monsters, searchField}=this.state;
    const filteredMonsters=monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1 className='head'> 
          <span> Monster Rolodex </span> 
          <FunButton handleChanges={() => {this.setState((prevState,prevProps) => ({monsters:[...prevState.monsters].sort( () => .5 - Math.random() )}))}}/>
        </h1>
        <SearchBox placeholder='search monster' handleChanges={e => this.setState((prevState,prevProps) => ({searchField: e.target.value}))}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}


export default App;
