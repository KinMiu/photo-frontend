// import Sidebar from "../components/sidebar"
import CardUser from "../components/user-card"
import Button from 'react-bootstrap/Button';

import axios from 'axios'
import { useEffect, useState } from "react";

const Dashboard = () => {
    const userData = localStorage.getItem('user')
    const parsingData = JSON.parse(userData)
    // console.log(parsingData.IDUSER)
    const [card, setCard] = useState([])
    // console.log(setCard)
    useEffect(() => {
        axios.get(`https://photo-backend-production.up.railway.app/photos/getbyuser/${parsingData.IDUSER}`)
        .then((res) => {
            // console.log(res.data.data)
            setCard(res.data.data)
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