import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react';
import axios from 'axios';

function Post() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const [msg, setMsg] = useState('')
  const user = localStorage.getItem('user')
  console.log(user)
  // console.log(localStorage.getItem('user'))

  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/user/login', {
        TITLE: title,
        DESCRIPTION: description,
        PHOTO: photo,
        USERS: localStorage.getItem('user'),
      })
      .then((res) => {
        // const response = res.data.loginResponse
        // if(response.code === 200) {
        //   const jsonData = JSON.stringify(response.data.user)
        //   console.log(jsonData)
        //   localStorage.setItem('user', jsonData)
        //   navigate('/')
        //   window.location.reload();
        // } else {
        //   setMsg(response.message)
        //   console.log("Response", res)
        // }
      })
    } catch (error) {
      if(error.response){
        console.error("Error :",error.response)
      }
    }

  }
  return (
    <div className='d-flex justify-content-center align-items-center text-items-center bg-light-subtle' style={{width: '100%', height: '100%'}}>
      <div className="container d-flex justify-content-start align-items-start mt-lg-5 p-lg-3 bg-success bg-opacity-50" style={{ width: '1280px', height: '530px'}}>
    <Form style={{ width: '500px' }} onSubmit={login}>

      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Title..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="password" placeholder="Enter Description..." />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicImages">
        <Form.Label>Images</Form.Label>
        <Form.Control value={photo} onChange={(e) => setPhoto(e.target.value)} type="password" placeholder="Enter URL..." />
      </Form.Group>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
    </div>
    </div>
  )
}

export default Post;