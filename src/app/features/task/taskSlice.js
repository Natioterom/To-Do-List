import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/**  Se creo nueva API desplegada con vercel para realizar peticiones
*/
export const fetchingAsyncTask = createAsyncThunk('task/fetchingAsyncTask', async() => {
    const url='https://api-rest-todo.vercel.app/todo'
    const response = await axios.get(url)
    return response.data
    })
export const deleteAsyncTask = createAsyncThunk('task/deleteAsyncTask', async(id)=>{
    const url=`https://api-rest-todo.vercel.app/todo/${id}`
    const response = await axios.delete(url)
     return response.data
})
export const toggleAsyncTask = createAsyncThunk('task/toggleAsyncTask', async(body)=> {
    const url = `https://api-rest-todo.vercel.app/todo/${body.id}`
       const response = await axios.patch(url,body)      
       return  response.data
})
export const EditAsyncTask = createAsyncThunk('task/EditAsyncTask', async(body)=> {
    const url = `https://api-rest-todo.vercel.app/todo/${body.id}`
       const response = await axios.patch(url,body)      
       return  response.data
})
export const addAsyncTask = createAsyncThunk('task/addAsyncTask', async(task)=> {
    const url = 'https://api-rest-todo.vercel.app/todo'
    const body = 
     { 
        checked:false,
        label: task
     }
       const response = await axios.post(url,body)      
       return response.data
})

const initialState ={
    tasks:[]
}

export const taskSlice = createSlice({
    name:'task',
   initialState,
    reducers:{ 
        edit: (state, actions) => {
            state.edit = actions.payload
        },
        labelTask:(state, actions) => {
            state.labelTask = actions.payload
        }
    },
    extraReducers: {
        [fetchingAsyncTask.pending]: () => {
            console.log('Pending')
        },  
        [fetchingAsyncTask.fulfilled]: (state, payload) => {
            console.log('Succes')
          state.tasks = payload.payload
        },
        [fetchingAsyncTask.rejected]: () => {
          console.log('Error')
        },
        [deleteAsyncTask.fulfilled]: (state, payload) => {
           return [{...state, payload}]
        },
        [toggleAsyncTask.fulfilled]: (state, payload) => {
            return [{...state, payload}]
        },
        [EditAsyncTask.fulfilled]: (state, payload)=>{
            return[{...state, payload}]
        },
        [addAsyncTask.fulfilled]: (state, payload) =>{
            return[{...state, payload}]
        }
    }
})

export const  { labelTask, edit } = taskSlice.actions
export default taskSlice.reducer
