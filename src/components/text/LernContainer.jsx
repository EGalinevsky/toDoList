import React, { Component } from "react";
import { Lern } from "./Lern";
import Products from "./products";

// class LernContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       todos: Products,
//     };
//     this.btnFirst = this.btnFirst.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {
//     de
//     this.setState((prevState) => {
//       const updateTodos = prevState.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       });
//       return {
//         todos: updateTodos
//       }
//     });
//   }

//   btnFirst() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   } //Возвращаем предыдущее значение

//   render() {
//     const productsMap = this.state.todos.map((lern) => (
//       <Lern
//         lern={lern}
//         key={lern.id}
//         btnFirst={this.btnFirst}
//         count={this.state.count}
//         handleChange={this.handleChange}
//       />
//     ));
//     return <div>{productsMap}</div>;
//   }
// }

class  LernContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      logIn: true
    };
    this.userLog=this.userLog.bind(this)
  }
  userLog(){
    this.setState(prevState =>{
      return{
        logIn: !prevState.logIn
      }
    })
  }

  render() {
    console.log(this.userLog)
    return <div>
      <Lern logIn={this.state.logIn} userLog={this.userLog}/>
    </div>;
  }
}

export default LernContainer;
