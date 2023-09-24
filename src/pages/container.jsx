import Card from '../components/card'
import Notif from '../components/notif'

const Container = () => {
    const isLogin = !!localStorage.getItem('user')
    return (
        <div className="mt-md-3 flu ">
            <div className="CardGroup d-flex flex-row gap-2 justify-content-start align-items-center mx-3 flex-wrap border border-2 rounded p-2">
                <Card />
                {isLogin ? (
                        <></>
                    ) : (
                        <Notif />
                    )
                }
            </div>
        </div>
    )
}

export default Container