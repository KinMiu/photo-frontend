import React from "react";
// import {Link} from 'react-router-dom'
// import { Button, Card } from "react-bootstrap";


import axios from 'axios'
import { useEffect, useState } from "react";

import "../css/card.css"

const Kartu = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get('https://photo-backend.vercel.app/photos/get')
        // axios.get('http://localhost:3002/photos/get')
        .then((res) => {
            setCard(res.data.data)
        })
        .catch((err) => {
            console.log(err)
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
                    <div key={index}>
                        <a href={`/photo-info/${data.ID}`}>
                            <img src={`https://drive.google.com/thumbnail?id=${gambar}&sz=w1000`} className="photo img-thumbnail" alt={data.TITLE}></img>
                        </a>
                    </div>
                )
            })
        }
        
        </>
    )
}

export default Kartu;

