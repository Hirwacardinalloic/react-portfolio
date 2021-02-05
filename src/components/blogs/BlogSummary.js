import { Link } from "react-router-dom";
const BlogSummary = ({ blog }) => {
    return ( 
        <div className="blog-preview">
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <p>{blog.body.slice(0,200)}</p>
                <Link to={`/blogs/${blog.id}`}>Read more...</Link>
            </div>
     );
}
 
export default BlogSummary;