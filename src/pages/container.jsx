import Kartu from "../components/Kartu"

const Container = () => {
    return (
        <div className="mt-md-3 flu ">
            <div className="CardGroup d-flex flex-row gap-2 justify-content-start mx-3 flex-wrap mt-3 border rounded border-2 p-2" style={{ minHeight: '400px' }}>
                <Kartu />
            </div>
        </div>
    )
}

export default Container