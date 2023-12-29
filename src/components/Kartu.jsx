import React from "react";
// import {Link} from 'react-router-dom'
// import { Button, Card } from "react-bootstrap";


import axios from 'axios'
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "../css/card.css"

const Kartu = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get('https://photo-backend.vercel.app/photos/get')
        .then((res) => {
            // console.log(res.data.data)
            setCard(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const infoCard = (id) => {
        try {
            // console.log(id)
            axios.get(`https://photo-backend.vercel.app/photos/get/${id}`)
            .then((res) => {
                console.log(res)
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        
        <>
        {
            card.map((data, index) => {
                const url = data.PHOTO
                const split = url.split('/')
                const gambar = split[5]
                return(
                    <div key={index}>
                        <a href={`/photo-info/${data.ID}`} onClick={() => infoCard(data.ID)}>
                            <img src={`https://drive.google.com/uc?export=view&id=${gambar}`} className="photo img-thumbnail" alt={data.TITLE}></img>
                        </a>
                    </div>
                )
            })
        }
        
        </>
    )
}

export default Kartu;

