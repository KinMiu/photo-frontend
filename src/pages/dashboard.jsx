import CardUser from '../components/CardUser';
import Button from 'react-bootstrap/Button';

import axios from 'axios'
import { useEffect, useState } from "react";

const Dashboard = () => {
    
    const userData = localStorage.getItem('user')
    const parsingData = JSON.parse(userData)

    console.log(parsingData)

    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get(`https://photo-backend.vercel.app/photos/getbyuser/${parsingData}`)
        .then((res) => {
            console.log(res)
            setCard(res.data.data)
        }).catch(err => {
            console.error(err)
        }) 
    }, [])
    return(
        <div className="mt-md-3 flu ">
            <Button href="/post" className="ms-3" variant="success" type="submit">
                Upload
            </Button>
            <div className="CardGroup d-flex flex-row gap-2 justify-content-start mx-3 flex-wrap mt-3 border rounded border-2 p-2" style={{ minHeight: '400px' }}>
                <CardUser cardData={card} />
            </div>
        </div>
    )
}

export default Dashboard