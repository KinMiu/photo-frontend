import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, json, useNavigate } from 'react-router-dom'

import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://photo-backend.vercel.app/user/login', {
        USERNAME: username,
        PASSWORD: password,
      }, {
        withCredentials: true
      })
      .then((res) => {
        const response = res.data.loginResponse
        const data = response.data.user
        if(response.code === 200){
          const jsonData = JSON.stringify(data)
          localStorage.setItem('users', jsonData)
          // window.location = '/'
        }
      }).catch((err) => {
        console.log("Err :", err)
      })
    } catch (error) {
      if(error.response){
        console.error("Error :",error.response)
      }
    }

  }
  return (
    <div className='d-flex justify-content-center align-items-center text-items-center bg-light-subtle' style={{width: '100%', height: '100%'}}>
      <div className="container d-flex justify-content-center align-items-center mt-lg-5 p-lg-3 bg-success bg-opacity-50" style={{ width: '400px', }}>
    <Form style={{ width: '500px' }} onSubmit={login}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username..." />
        <Form.Text className="text-muted">
          Input Your Username
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password..." />
        <Form.Text className="text-muted">
          Input Your Password
        </Form.Text>
      </Form.Group>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="success" type="submit">
          Login
        </Button>
        <Link to={'/signup'}>Sign up</Link>
      </div>
    </Form>
    </div>
    </div>
  )
}

export default Login;