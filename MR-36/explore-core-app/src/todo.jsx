export default function ToDo({task,isDone}){
    // props.task ='js'; not possible because props is readonly.cannot change
if(isDone){
        return(
        <li>DONE : {task} </li>
    )
}
else{
        return(
        <li>DO NOW : {task} </li>
    )
}
}