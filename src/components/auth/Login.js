import { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: ''

    }
    handleChange = e=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
        
    }
    render() {
        if(this.props.auth) return <Redirect to='/' />
        return ( 
            <div className="container">
                <h2>Sign in</h2>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" placeholder='example@example' required onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input id='password' type="password" placeholder='********' required onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <button>Login</button>
                    </div>
                </form>
            </div>
         );
    }
   
}

const mapStateToProps = state=>{
    return {
        auth: state.auth.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signIn: (credentials)=> dispatch(signIn(credentials))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);