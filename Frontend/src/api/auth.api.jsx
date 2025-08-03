import api from "./config";

export async function registerUser(data){
    return api.post('/user/register' , data , {withCredentials : true})
}

export async function loginUser(data){
    return api.post('/user/login' , data , {withCredentials : true})
}

export async function logoutUser(){
    return api.get('/user/logout' ,  {withCredentials : true})
}

export async function getUser(){
    return api.get('/user/getUser')
}