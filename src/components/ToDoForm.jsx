import { useState } from "react";


const ToDoForm = ({onFormSubmit}) => {
    const [toDoName, setToDoName] = useState();
    const [isComplete, setIsCompleteTask] = useState();

    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(toDoName, isComplete)
    }

    return <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter Task" name="task" onChange={e => setToDoName(e.target.value)} />
        <input type="checkbox" onChange={e => setIsCompleteTask(e.target.value)} />
        <label> Thick if completed</label>
        <button>Submit</button>
    </form>
}

export default ToDoForm;