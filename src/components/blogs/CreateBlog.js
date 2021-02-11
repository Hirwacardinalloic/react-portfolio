import { Component } from "react";

import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { createBlog } from '../../store/actions/blogActions';
class CreateBlog extends Component {
    state = {
        title: '',
        body: '',
        author: ''

    }
    
    handleChange = e=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.createBlog(this.state);
        
    }
    render(){
        const { auth } = this.props;
        if(!auth)
            return <Redirect to='/login'/>
        
        return(
            <div className="create">
                <h2>Add new blog</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Blog title</label>
                    <input
                        type="text" 
                        required
                        id='title'
                        onChange={this.handleChange}
                    />
                    <label>Blog body</label>
                    <textarea 
                        required
                        id='body'
                        onChange={this.handleChange}
                    ></textarea>
                    <label>Blog author</label>
                    <select
                        required
                        id='author' 
                        onChange={this.handleChange}
        
                    >
                        <option></option>
                        <option value='Loic'>Loic</option>
                        <option value='Frank'>FranK</option>
                        <option value='Loic'>Faisal</option>
                        <option value='Frank'>Edgar</option>
        
                    </select>
                <button>Add Blog</button>
                </form>
           
           </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.auth.auth
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        createBlog: (blog)=> dispatch(createBlog(blog))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);