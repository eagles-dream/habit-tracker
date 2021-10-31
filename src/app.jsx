import './app.css'
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {

  state= {habits: [
    {id:1, name: "Reading", count: 0},
    {id:2, name: "Runing", count: 0},
    {id:3, name: "Coding", count: 0},
  ]}

  handlePlus = (habit) => {
    const habits = this.state.habits.map(item=>{
      if(item.id===habit.id) {
        return {...habit, count: habit.count + 1}
      } 
        return item
    })
    this.setState({habits})
  }

  handleMinus = (habit)=> {
    const habits = this.state.habits.map(item=>{
      if(item.id===habit.id) {
        const count = habit.count -1
        return {...habit, count: count < 0 ? 0 : count}
      } 
        return item
    })
    this.setState({habits})
  }

  handleDelete = (habit)=> {
    const habits = this.state.habits.filter(item => item.id !==habit.id)
    this.setState({habits})
  }

  handleAdd = (name)=> {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}]
    this.setState({habits})
  }

  hadleReset = ()=> {
    const habits = this.state.habits.map(habit=> {
      if(habit.count !== 0 ) {
        return {...habit, count: 0}
      }
        return habit
    })
    this.setState({habits})
  }

  render() {
    console.log('app')
    return (
      <div>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          handlePlus={this.handlePlus}
          handleMinus={this.handleMinus}
          handleDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.hadleReset}
        />
      </div>
    );
  }
}

export default App;