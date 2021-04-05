import React, { Component } from "react";

// export const Lern = (props) => {
//   return (
//     <div>
//       <h1>{props.lern.name}</h1>
//       <h1>{props.lern.price}</h1>
//       <div>{props.count}</div>
//       <div>{props.lern.completed ? "true" : "false"}</div>
//       <div>
//         <input
//           type="checkbox"
//           onChange={() => props.handleChange(props.lern.id)}
//           checked={props.lern.completed ? true : false}
//         />
//         <span>первый спан</span>
//       </div>

//       <div>
//         <button onClick={props.btnFirst}>click me</button>
//       </div>
//     </div>
//   );
// };

export const Lern = (props) => {
  return(
    <div>
      <button onClick={props.userLog}>{props.logIn ? 'login': 'logout'}</button>
      Code goes here
    </div>
  )
}
