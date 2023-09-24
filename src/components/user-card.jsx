import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

const CardComponent = ({ cardData }) => {
    // console.log(cardData)
    if(!cardData || cardData.length === 0 ) {
        return(
            <div className="mx-auto my-4 d-flex flex-column justify-content-center align-items-center text-center border p-3" style={{ width: "600px" }}>
                <h1>Empty Photo</h1>
                <p>Upload Your photo Now !</p>
                <Button href="/post" className="ms-3" variant="success" type="submit">
                    Upload
                </Button>
            </div>
        )
    }
    return (
        <div className="d-flex flex-row gap-2">
        {
            cardData.map((data, index) => {
                
                    const url = data.PHOTO
                    const split = url.split('/')
                    const gambar = split[5]
                    return(
                        <Link to={`/photo-info/${data.ID}`} key={index}>
                            <div key={index}>
                                <img style={{ maxHeight: '370px', }} src={`https://drive.google.com/uc?export=view&id=${gambar}`} className="img-thumbnail" alt={data.TITLE}></img>
                            </div>
                        </Link>
                    )
                
            })
        }
        </div>
    )
}

export default CardComponent;

