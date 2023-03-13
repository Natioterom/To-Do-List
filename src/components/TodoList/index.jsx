import './styles.css'
import swal from 'sweetalert';
import TodoListItem from 'components/TodoListItem'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsyncTask, fetchingAsyncTask, toggleAsyncTask, edit, labelTask } from 'app/features/task/taskSlice';
import ModalList from "components/ModalList.jsx";

const TodoList = () => {

const dispatch = useDispatch()

const checked = useRef(false)
const { tasks } =useSelector(state => state.task)
const editState = useSelector(store => store.task.edit)
useEffect(()=>{
dispatch(fetchingAsyncTask())
},[dispatch])


const taskDone = tasks.filter(task => task.checked === false).length 
const message = taskDone === 0 ? `Looks like you're absolutely free today!`: ''

const handleDelete = async(todoId) => {
  const id = tasks.indexOf(tasks.find(task => task.id === todoId))
const confirm = await swal ({
    title: 'Are you sure that you want to delete this task?',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  })
  const deleteToDo = await confirm
      if (deleteToDo) {
    await dispatch(deleteAsyncTask(id))
   await dispatch(fetchingAsyncTask())
        swal('Task was deleted!', {
          icon: 'success'
        })
      } else {
        swal(`Task wasn't deleted`)
      }
    }
   
  
const toggleCheck = async(todoId, isChecked) => {
    const id = tasks.indexOf(tasks.find(el => el.id === todoId))
    checked.current = !isChecked
    const body ={
      ...tasks[id],
      checked
    }
    body.checked =checked.current
     await dispatch(toggleAsyncTask(body))
     await dispatch(fetchingAsyncTask())
  }
  const handleEdit = async(task) => {
      dispatch(edit(true))
      dispatch(labelTask(task))
  }

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        { tasks.map(task => { return (
          < div key ={task.id}>
            <TodoListItem label={task.label} 
            checked={task.checked} 
            onDelete={()=>{handleDelete(task.id)}} 
            onCheck={()=>{toggleCheck(task.id, task.checked)}} 
            onEdit={()=>{handleEdit(task)}} />
             </div>
        )})}
      </div>
      { editState ? <ModalList /> : ' '}
      <div className="no-todos">
        {message}
      </div>
    </div>
  );
};

export default TodoList;
