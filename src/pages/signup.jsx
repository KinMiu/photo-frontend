import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [msg, setMsg] = useState('')

  const navigate = useNavigate()

  const signUp = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://photo-backend-production.up.railway.app/user/create', {
        USERNAME: username,
        NAME: name,
        PASSWORD: password,
        CONFPASSWORD: confPassword
      })
      .then((res) => {
        if(res.data.code === 200) {
          navigate('/login')
        } else {
          setMsg(res.data.message)
          // console.log(res.data.message)
        }
      })
    } catch (error) {
      if(error.response){
        console.error(error.response)
      }
    }

  }
  return (
    <div className='d-flex justify-content-center align-items-center text-items-center bg-light-subtle' style={{width: '100%', height: '100%'}}>
      <div className="container d-flex justify-content-center align-items-center mt-lg-5 p-lg-3 bg-success bg-opacity-50" style={{ width: '400px', }}>
        <Form style={{ width: '500px' }} onSubmit={signUp}>
          <p>{msg}</p>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>full name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Full name..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfPass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control value={confPassword} onChange={(e) => setConfPassword(e.target.value)} type="password" placeholder="Confirm Password..." />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="success" type="submit">
              Sign Up
            </Button>
            <Link to={'/login'}>Login</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login;