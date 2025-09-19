// export default function ToDo({task,isDone}){
//     // props.task ='js'; not possible because props is readonly.cannot change
// if(isDone){
//         return(
//         <li>DONE : {task} </li>
//     )
// }
// else{
//         return(
//         <li>DO NOW : {task} </li>
//     )
// }
// }

//conditional rendering ternary
//condition ? true : false

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       done: {task} time:{time}
//     </li>
//   ) : (
//     <li>not done: {task}</li>
//   );
// }

//conditional rendering : 4 &&

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone &&
//     <li>
//       done: {task} time:{time}
//     </li>

// }
// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ||
//     <li>
//       not done done: {task} time:{time}
//     </li>

// }

// conditional rendering : 6 use variable

export default function ToDo({ task, isDone,time }) {
    const displayTime =time?time:100;
  let listItem;
  if (isDone) {
    listItem =  <li>DONE : {task} time:{displayTime}</li>;
  } else {
    listItem =  <li>Pending : {task} </li>;
  }
  return listItem;
}
