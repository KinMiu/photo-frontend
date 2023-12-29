import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

function NavScrollExample() {
    const isLogin = localStorage.getItem('users')

    const [name, setName] = useState('')

    const user = localStorage.getItem('users')

    const parseData = JSON.parse(user)
    useEffect(() => {
        if (parseData) {
            setName(parseData.NAME);
        }
    }, [parseData])

    const logout = () => {
        localStorage.removeItem('users')
    }

    return (
        <Navbar expand="lg" className="bg-dark-subtle">
            <Container fluid>
                <Navbar.Brand className='fw-bold' href={'/'}>PHOTOGRAPH</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className='ms-auto d-flex flex-row justify-content-center align-items-center gap-3'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        {
                            isLogin ? (
                                    <Dropdown className='dropstart' >
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" drop='down-centered' >
                                      {name}
                                    </Dropdown.Toggle>
                              
                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                                      <hr className="dropdown-divider"></hr>
                                      <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                                      <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                                      <hr className="dropdown-divider"></hr>
                                      <Dropdown.Item href={'/'} onClick={logout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                            ) : (
                                <Link to={'/login'} className='btn btn-success'>Login</Link>
                            )
                        }
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;