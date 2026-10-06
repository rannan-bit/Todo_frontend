import axios from "axios";
import axiosInstance from "./instance";


//api for add
export const addTodoAPI=async(reqBody)=>{
    return await axiosInstance.post('/todos',reqBody)
}
//api for view
export const viewTodoAPI=async()=>{
    return await axiosInstance.get('/todos')
}
export const updateTodoAPI=async(id,reqBody)=>{
    return await axiosInstance.put(`/todos/${id}`,reqBody)
}
