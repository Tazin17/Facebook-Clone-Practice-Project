import axiosInstance from "./url.service"


//create method for post
export const createPost = async(postData) =>{
    try{
        const result = await axiosInstance.post('/users/posts', postData)
        return result ?.data?.data;
    }catch(error){
        console.error(error)
        throw error;
    }
}

//create method for story
export const createStory = async(story) =>{
    try{
        const result = await axiosInstance.post('/users/posts', postData)
        return result ?.data?.data;
    }catch(error){
        console.error(error)
        throw error;
    }
}

//get all post method
export const getAllPosts = async() =>{
    try{
        const result = await axiosInstance.get('/users/posts')
        return result ?.data?.data;
    }catch(error){
        console.error(error)
        throw error;
    }
}

//get all story method
export const getAllStory = async() =>{
    try{
        const result = await axiosInstance.get('/users/story')
        return result ?.data?.data;
    }catch(error){
        console.error(error)
        throw error;
    }
}