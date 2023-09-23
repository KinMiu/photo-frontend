import React from "react";
// import {Link} from 'react-router-dom'
// import { Button, Card } from "react-bootstrap";


import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const K = () => {
    const userData = localStorage.getItem('user')
    const parsingData = JSON.parse(userData)
    // console.log(parsingData.IDUSER)
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get(`https://photo-backend-production.up.railway.app/photos/getbyuser/${parsingData.IDUSER}`)
        .then((res) => {
            console.log(res.data.data)
            setCard(res.data.data)
        })
    }, [])
    return (
        
        <>
        {
            card.map((data, index) => {
                const url = data.PHOTO
                const split = url.split('/')
                const gambar = split[5]
                return(
                    <Link to={`/photo-info/${data.ID}`}>
                        <div key={index}>
                            <img style={{ maxWidth: '270px', }}  src={`https://drive.google.com/uc?export=view&id=${gambar}`} className="img-thumbnail" alt={data.TITLE}></img>
                        </div>
                    </Link>
                )
            })
        }
        
        </>
    )
}

export default K;

