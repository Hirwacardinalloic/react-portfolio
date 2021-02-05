import { Component } from "react";
import { useHistory } from 'react-router-dom';

class Comments extends Component  {
    state = {
        email: '',
        comment: ''
    }
    handleChange = (e)=>{

    }
    
    render() {
        return ( 
            <div className="comment">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder="example@example.com" required onChange={this.handleChange}/>
                    <label htmlFor="comment"></label>
                    <textarea id='comment' onChange={this.handleChange} required></textarea>
                    <button>Comment</button>
                </form>
            </div>
         );
    }
   
}
 
export default Comments;