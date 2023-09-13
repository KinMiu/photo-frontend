import React from "react";
// import {Link} from 'react-router-dom'
import { Button, Card } from "react-bootstrap";


import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const K = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/photos/get')
        .then((res) => {
            // console.log(res.data.data)
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
                    <img style={{ maxWidth: '270px' }} src={`https://drive.google.com/uc?export=view&id=${gambar}`} class="img-thumbnail" alt={data.TITLE}></img>
                    </Link>
                )
            })
        }
        
        </>
    )
}

export default K;

