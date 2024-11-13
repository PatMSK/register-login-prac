import React , {useState} from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

    const [Action, setAction] = useState("Login");

    return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{Action}</div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <b>Username</b>
                <input type="text"/>
            </div>
            {Action === 'Login'?<div></div>:<div className='input'>
                <b>Email</b>
                <input type="text"/>
            </div>}
            <div className='input'>
                <b>Password</b>
                <input type="text"/>
            </div>

        </div>
        <div className='submit-container'>
            <div className={Action==="Signup"?"submit gray":"submit"} onClick={() => setAction("Login")}>Login</div>
            <div className={Action==="Login"?"submit gray":"submit"} onClick={() => setAction("Signup")}>Signup</div>
        </div>
    </div>
  )
}

export default LoginSignup