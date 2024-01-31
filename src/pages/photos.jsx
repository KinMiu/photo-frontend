// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPhoto from "../components/DetailPhoto";

//css
import '../css/photos.css'

//icons

import FormattingDate from "../libs/formattingDate";

function Photos() {
  const [data, setData] = useState({})
  const [publishedDate, setPublishedData] = useState('')
  const [gambar, setGambar] = useState('')
  const [url, setUrl] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3002/photos/get/${id}`)
        const data = res.data.data
        const PublishedDate = FormattingDate(data.CREATED_AT)
        const url = data.PHOTO
        const split = url.split('/')
        const gambar = split[5]
        console.log(gambar)

        setPublishedData(PublishedDate)
        setData(data)
        setGambar(gambar)
        setUrl(url)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])

  return (
    <div className="w-100 p-2 mt-3">
      <div className="photos d-flex flex-wrap justify-content-center gap-2">
        <div>
          <img 
            className="object-fit-contain"
            src={`https://drive.google.com/thumbnail?id=${gambar}&sz=w1000`} 
            alt="tes" 
            style={{ 
              width: '750px',
              height: '500px'
            }}/>
        </div>
        <DetailPhoto data={data} publishedDate={publishedDate} gambar={url} />
      </div>
    </div>
  )
}

export default Photos;