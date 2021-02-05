import useFetch from "../useFetch";

const BlogComments = () => {
    const {data:comments, isPending, error} = useFetch('http://localhost:8000/comments');
    return ( 
        
        <div className="comment-wrapper">

        </div>
     );
}
 
export default BlogComments;