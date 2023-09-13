import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Photos() {
  return (
    <div className='d-flex justify-content-center align-items-center text-items-center bg-light-subtle' style={{width: '100%', height: '100%'}}>
      <div className="container d-flex justify-content-center align-items-center mt-lg-5 p-lg-3 bg-success bg-opacity-50" style={{ width: '400px', }}>
    <Form style={{ width: '500px' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Input Email Anda
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default Photos;