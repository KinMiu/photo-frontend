
const DetailPhoto = ({ data, publishedDate, gambar }) => {
  console.log(gambar)
  const downloadUrl = `${gambar}`

  return(
    <div className="border rounded-4 px-4 py-2 d-flex flex-column align-items-center shadow bg-white">
        <div>
          <h3 className="text-uppercase my-3">{data.TITLE}</h3>
        </div>

        <div className="d-flex flex-row gap-2 border-top pt-3">
          <button className="btn btn-outline-success d-flex flex-row justify-content-center align-items-center gap-1 px-5">
            <i class="bi bi-heart"></i>
            <span className="">0</span>
          </button>
          <button className="btn btn-outline-secondary d-flex flex-row justify-content-center align-items-center gap-1 px-5">
            <i class="bi bi-bookmark"></i>
            <span className="">0</span>
          </button>
          <button className="btn btn-outline-secondary d-flex flex-row justify-content-center align-items-center gap-1 px-3 py-2">
            <i class="bi bi-chat-left"></i>
          </button>
          <button className="btn btn-outline-primary d-flex flex-row justify-content-center align-items-center gap-1 px-3 py-2">
            <i className="bi bi-share"></i>
          </button>
        </div>

        <div className="w-100 mt-2 d-flex flex-column gap-2">
          <div className="d-flex flex-row justify-content-between">
            <span>Views</span>
            <span>1000</span>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>Download</span>
            <span>1000</span>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>Saves</span>
            <span>1000</span>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>Media type</span>
            <span>JPG</span>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>Resolution</span>
            <span>1033 x 1280</span>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>Published date</span>
            <span>{publishedDate}</span>
          </div>
          <div>
            <a className="btn btn-success text-text-decoration-none w-100" href={downloadUrl} >Download</a>
          </div>
        </div>

        <div className="w-100 mt-3 pt-3 d-flex flex-row justify-content-between border-top">
          <div className="">
            <a href="/#" className='d-flex flex-row align-items-center gap-1 text-decoration-none text-dark'>
              <img 
              className="user-profile rounded-circle"  
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" 
              alt="User Profile" 
              style={{
                width: '50px'
              }}
              />
              <div className='d-flex flex-column'>
                <span><b>M Aldi Prasetyo</b></span>
                <span className='text-xl'>1,268 followers</span>
              </div>
            </a>
          </div>
          <div className='mt-2'>
            <a className='text-decoration-none text-dark d-flex justify-content-center align-items-center' href="/#">
              <i className="bi bi-person-add" style={{fontSize: '22px'}}></i>
              <span className='ms-1'>Follow</span>
            </a>
          </div>
        </div>
      </div>
  )
}

export default DetailPhoto