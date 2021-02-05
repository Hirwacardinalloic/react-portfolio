import axios from "axios";

export const createBlog = (blog)=>{

    return async (dispatch, getState)=>{
        //make async codes
        await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog) 
        })

        dispatch({
            type: 'CREATE_BLOG', 
             blog
        });
    }
}

export const deleteBlog = (id)=>async (dispatch, getState)=>{
         fetch('http://localhost:8000/blogs/'+id, { method: "DELETE"  }).then(res=>{
             return res.json();
         }).then(data=>{
             console.log(data);
         })
         
        dispatch({
            type: 'DELETE_BLOG'
        })
}
    

export const fetchBlogs = ()=> async (dispatch, getState)=>{
            const response = await axios.get('http://localhost:8000/blogs'); 
            dispatch({
                type: 'FETCH_BLOGS',
                payload: response.data
            })
}
