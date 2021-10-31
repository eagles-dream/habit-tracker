import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  handlePlus = ()=> {
    this.props.handlePlus(this.props.habit)
  }

  handleMinus = ()=> {
    this.props.handleMinus(this.props.habit)
  }

  handleDelete = ()=> {
    this.props.handleDelete(this.props.habit)
  }

  render() {
    console.log('habit')
    return (
      <div className="habit">
        <span className="habit_name">{this.props.habit.name}</span>
        <span className="habit_count">{this.props.habit.count}</span>
        <button 
          className="habit_button button_increase"
          onClick={this.handlePlus}><i className="fas fa-plus-square"></i></button>
        <button 
          className="habit_button button_decrease"
          onClick={this.handleMinus}><i className="fas fa-minus-square"></i></button>
        <button 
          className="habit_button button_delete"
          onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
      </div>
    );
  }
}

export default Habit;