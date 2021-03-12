import {fetchBlogs,createdPost} from '../Api/index';

//ACTION CREATOR

export const loadBlogs = () => async (dispatch) => {
//FETCH BLOG POSTS
try{
const {data} = await fetchBlogs();

dispatch({
    type: 'FETCH_BLOGS',
    payload: data
})
}catch(err){
console.log(err.message)
}

}

export const postCreated = (newPost) => async (dispatch) => {
 try{
     const {data} = await createdPost(newPost);
     console.log(data);
     dispatch({
         type: "CREATE", 
         payload: data
     })
 } catch (error){
  console.log('error message 404');
 }  
}