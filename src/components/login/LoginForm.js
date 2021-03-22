import React from 'react'
import '../../styles/login.scss'

export default function LoginForm(props) {
    return (
        <div className="form_div">
            <form>
                <h4>Please sign in</h4>
                <input
                    type = "text" key = {props.key}
                    value= {props.nameValue} placeholder="Username or email"
                    onChange = {(event) => props.onChangeHandler(event)}/>
                    <br></br>
                <input
                    type = "password" key = {props.key}
                    value= {props.passValue} placeholder="Password"
                    onChange = {(event) => props.onChangeHandler(event)}/>
                    <br></br>
                <button disabled={true}>
                    Login
                </button>
            </form>
            
        </div>
    )
}
