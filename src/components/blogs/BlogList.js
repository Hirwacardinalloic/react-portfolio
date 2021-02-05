// // import useFetch from "./useFetch";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../store/actions/blogActions";

// import { Component } from "react";
// import BlogSummary from "./BlogSummary";
// import { connect } from 'react-redux';
// import { fetchBlogs } from "../../store/actions/blogActions";

// // const BlogList = () => {
// //     const {data:blogs, error, isPending} = useFetch('http://localhost:8000/blogs');
  
    
    // return ( 
    //     <div className="blog-list">
    //         {error && <div></div>}
    //         {isPending && <div>Loading...</div>}
    //         {blogs && blogs.map((blog)=>(
    //             <div className="blog-preview" key={blog.id}>
    //                     <h2>{blog.title}</h2>
    //                     <p>Writen by {blog.author}</p>
    //                     <p>{blog.body.slice(0,200)}</p>
    //                     <Link to={`/blogs/${blog.id}`}>Read more...</Link>
               
    //             </div>
    //         ))}
            
    //     </div>
    //   );
// // }
 
// // export default BlogList;
// class BlogList extends Component {
//     render(){
//         console.log(this.props)
//         return (
//             // <div className="blog-list-section">
//             //     {blogs && blogs.map(blog=>{
//             //         return <BlogSummary blog={blog} key={blog.id}/>
//             //     })}
//             // </div>
//             <div></div>
//         )
//     }
// }
// const mapStateToProps = (state)=>{
//     return {
//         blogs: state
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         fetchBlogs: ()=> dispatch(fetchBlogs())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
const BlogList = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state=> state.blog.blogs);
    useEffect(()=>{
        dispatch(fetchBlogs());
    }, []);
    return ( 
        <div className="blog-list">
            {blogs && blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Writen by {blog.author}</p>
                        <p>{blog.body.slice(0,200)}</p>
                        <Link to={`/blogs/${blog.id}`}>Read more...</Link>
               
                </div>
            ))}
            
        </div>
      );
}
 
export default BlogList;