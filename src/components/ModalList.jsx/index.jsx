import { useState } from 'react';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { edit,EditAsyncTask, fetchingAsyncTask } from 'app/features/task/taskSlice';

const ModalList = () => {
const dispatch = useDispatch()
const taskTodo = useSelector(store => store.task.labelTask)
const [ inputModal ,setInputModal ] = useState(taskTodo.label)

const closeModal = () => {
    dispatch(edit(false))
}
const changeTask = (e) => {
 setInputModal(e.target.name = e.target.value)
}
const onEdit = async() => {
    const body ={
        ...taskTodo,
        label:inputModal
      }
      await dispatch(EditAsyncTask(body))
      await dispatch(fetchingAsyncTask())
      dispatch(edit(false))
}

    return(
        <article className='container-modal-todo'>
        <div className='modal-todo'>
        <button className='button-close-modal-todo'onClick={closeModal} >x</button>
         <label className='label-input-todo'>You can edit your task to do:</label>
         <input className='input-modal-todo'name='label' value={inputModal} onChange={changeTask} />
         <button className='button-modal-todo' onClick={onEdit}>EDIT TO DO</button>
        </div>
        </article>
    )
}
export default  ModalList