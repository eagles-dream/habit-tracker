import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

  handlePlus = (habit) => {
    this.props.handlePlus(habit)
  }

  handleMinus = (habit)=> {
    this.props.handleMinus(habit)
  }

  handleDelete = (habit)=> {
    this.props.handleDelete(habit)
  }

  handleAdd = (name)=> {
    this.props.onAdd(name)
  }

  onReset = ()=> {
    
  }

  render() {
    console.log('habits')
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {
            this.props.habits.map(habit=>
              (
                <Habit 
                  key={habit.id}
                  habit={habit}
                  handlePlus={this.handlePlus}
                  handleMinus={this.handleMinus}
                  handleDelete={this.handleDelete}
                />
              )
            )
            /* this.state.habits.map(a=> <Habit habits={a} />) */
          }
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </div>
    );
  }
}

export default Habits;