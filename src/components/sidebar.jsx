// import "../css/sidebars.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/js/dist/dropdown"
// import {FaHome, FaPhotoVideo} from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="bg-dark col-auto col-md-2 text-white min-vh-100 d-flex justify-content-between flex-column" style={{height: '633px'}}>
                    <div>
                        <a className="text-decoration-none text-white d-flex align-items-center ms-3 mt-2">
                            <span className="ms-1 fs-4">Brand</span>
                        </a>
                        <hr className="text-secondary"/>
                        <ul className="nav nav-pills flex-column text-white">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-speedometer2"></i>
                                    <span className="ms-2">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-house"></i>
                                    <span className="ms-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4">
                                <a href="#" className="nav-link  text-white fs-5" aria-current="page">
                                    <i className="bi bi-table"></i>
                                    <span className="ms-2">Order</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown open mb-2" d-flex flex-column justify-content-center align-items-center>
                        <hr />
                        <a class="text-decoration-none text-white dropdown-toggle " type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-person-circle"></i>
                                    <span className="ms-2 ">Users</span>
                                </a>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item disabled" href="#">Disabled action</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-success" style={{width: '280px', height: '633px'}}>
        //         <a href={"/dashboard"} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        //             <span class="fs-4">Dashboard</span>
        //         </a>
        //         <hr/>
        //         <ul class="nav nav-pills flex-column mb-auto">
        //             <li class="nav-item">
        //             <a href="#" class="nav-link text-white" aria-current="page">
        //                 <FaHome class="me-2"/>
        //                 {/* <svg class="bi pe-none me-2" width="16" height="16"><use href="#home"/></svg> */}
        //                 Home
        //             </a>
        //             </li>
        //             <li>
        //             <a href="#" class="nav-link text-white">
        //                 <FaPhotoVideo class="me-2"/>
        //                 Photo
        //             </a>
        //             </li>
        //         </ul>
        //         <hr/>
        //         <div class="dropdown">
        //             <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        //             <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        //             <strong>mdo</strong>
        //             </a>
        //             <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        //             <li><a class="dropdown-item" href="#">New project...</a></li>
        //             <li><a class="dropdown-item" href="#">Settings</a></li>
        //             <li><a class="dropdown-item" href="#">Profile</a></li>
        //             <li><hr class="dropdown-divider"/></li>
        //             <li><a class="dropdown-item" href="#">Sign out</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Sidebar;