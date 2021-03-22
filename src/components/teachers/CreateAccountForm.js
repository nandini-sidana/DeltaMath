import React from 'react'
import '../../styles/forms.scss'

export default function CreateAccountForm(props) {
    return (
        <div>
            <form>
                <h3>Create Teacher Account</h3>
                <h2>Personal Information</h2>
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
