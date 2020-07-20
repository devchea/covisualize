import React, { useState } from 'react'
  
export function Login(props){

    const [ user, changeUser ] = useState({
        name: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                password: user.password
            })
        }).then( response => {
            return response.json()
        })
        .then((response) => {
            let { success, id, token } =response
            if(success){
                localStorage.setItem('token', token)
                props.history.push(`/passengers/${id}`)
            }
        })
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <input type="text" value={user.name} onChange={ e => changeUser({ ...user, name: e.target.value })} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} />
            </div>
            <input type="submit" />
        </form>
    )
}  