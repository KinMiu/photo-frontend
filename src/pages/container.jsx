// import { useState, useEffect } from 'react'
// import Card from '../components/card'
import axios from 'axios'
import { Button } from 'react-bootstrap'
// import jwtDecode from "jwt-decode"
// import { useNavigate } from 'react-router-dom'


const Container = () => {
    // const cookieValue = Cookies.get()
    // console.log(cookieValue)
    // const [ name, setName ] = useEffect('')
    // const [ token, setToken ] = useEffect('')
    // const [ expToken, setExpToken ] = useEffect('')

    // useEffect(() => {
    //     refreshToken()
    // }, [])

    // const refreshToken = async () => {
    //     try {
    //       const data = await axios.get('http://localhost:3002/user/token')
    //       console.log(data)
    //         // setToken(res.data.accessToken)
    //         // const decoded = jwtDecode(res.data.accessToken)
    //         // setName(decoded.name)
    //         // setExpToken(decoded.exp)
    
    //     } catch (error) {
    //         console.log(error)
    //     //   if(error.response){
    //     //     // navigate('/')
    //     //   }
    //     }
    //   }

    const logout = async () => {
        try {
            await axios.delete('http://localhost:3002/user/logout')
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="mt-md-3 flu ">
            <div className="CardGroup d-flex flex-row gap-2 justify-content-start align-items-center mx-3 flex-wrap border border-2 rounded p-2">
                <Button onClick={logout} className='btn btn-primary' >Logout</Button>
                {/* <Card /> */}
            </div>
        </div>
    )
}

export default Container