import { Component } from "react";
import Comments from "./Comments";
import { connect } from 'react-redux';
import { deleteBlog } from '../../store/actions/blogActions';


class BlogDetails extends Component {
    
    handleClick = ()=>{
        this.props.deleteBlog(this.props.blog.id);
        this.props.history.push('/blogs'); 
    }
  
    
    render(){
        
        const {blog} = this.props;
        const { auth }= this.props;
        return ( 
            <div className="blog-details">
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Writen by {blog.author}</p>
                        <div>{blog.body}</div>
                        {auth &&<button onClick={this.handleClick}>delete</button>}
                    </article>
                )}
                <Comments/>
            </div>
         );
    }
    }

    const mapStateToProps = (state, ownProps)=>{
        const id = ownProps.match.params.id;
        return {
            blog: state.blog.blogs.find(blog=> blog.id==id),
            auth: state.auth.auth
        }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
            deleteBlog: (id)=> dispatch(deleteBlog(id))
        } 
    }
  
 
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);