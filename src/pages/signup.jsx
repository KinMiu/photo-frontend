import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [msg, setMsg] = useState('')

  const signUp = async (e) => {
    e.preventDefault()
    try {
      // await axios.post('https://photo-backend.vercel.app/user/create', {
      //   USERNAME: username,
      //   NAME: name,
      //   PASSWORD: password,
      //   CONFPASSWORD: confPassword
      // })
      await axios.post('http://localhost:3002/user/create', {
        USERNAME: username,
        NAME: name,
        PASSWORD: password,
        CONFPASSWORD: confPassword
      })
      .then((res) => {
        if(res.data.code === 200) {
          window.location = '/login'
        } else {
          setMsg(res.data.message)
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
      <div className="container d-flex mt-4 p-3 rounded justify-content-center align-items-center mt-lg-5 bg-success bg-opacity-50" style={{ width: '350px', }}>
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
            <Link className='text-white' to={'/login'}>Login</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login;