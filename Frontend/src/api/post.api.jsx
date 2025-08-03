import api from "./config";

export function createPost(data){
    return api.post('/post/create' , data )
}

export function getAllPost(){
    return api.get('/post/getPost')
}