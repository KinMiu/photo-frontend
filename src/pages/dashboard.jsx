import Sidebar from "../components/sidebar"
import CardUser from "../components/user-card"

import Button from 'react-bootstrap/Button';

const Dashboard = () => {
    return(
        <div className="mt-md-3 flu ">
            <Button href="/post" className="ms-3" variant="success" type="submit">
                Post
            </Button>
            <div className="CardGroup d-flex flex-row gap-2 justify-content-start mx-3 flex-wrap mt-3 border p-2">
                <CardUser />
            </div>
        </div>
    )
}

export default Dashboard