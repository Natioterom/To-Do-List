import './styles.css'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux';
import { addAsyncTask, fetchingAsyncTask } from 'app/features/task/taskSlice';
import { useState } from 'react';

const FormList = () => {
const dispatch = useDispatch()

const [ inputTask, setInputTask ] = useState('')

const handleChangeInput = (e) => {
 setInputTask(e.target.name = e.target.value )
}


const handleAddTask = async(e) => {
    e.preventDefault()
  if(inputTask.length >= 1){
   await  dispatch(addAsyncTask(inputTask))
   await dispatch(fetchingAsyncTask())
   setInputTask('')
  } else{
    swal('You must write a task','', 'warning')
  }
}
 

return(
<form className='container-todo-form'>
  <div className='container-form-todo'>
    <input type='text' 
    placeholder='Enter a new to do' 
    onChange={handleChangeInput} 
    name='task'
    className='input-task-form-todo' 
    value={inputTask}
    />
    <button className='button-form-todo' onClick={handleAddTask}>ADD TO DO</button>
  </div>
</form>
  )};


export default FormList