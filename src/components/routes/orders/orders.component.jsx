import Button from "../../button/button.component"
import "./orders.styles.scss"
import { useEffect, useState } from "react"
// import { UserContext } from "../../../context/user.context"
// import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserOrders } from "../../../store/user/user.selector"
import { useNavigate } from "react-router-dom"
import Spinner from "../../spinner/spinner.component"

export const monthMap = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

export const setDate = (seconds) => {
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds)
    const year = date?.getFullYear();
    const month = date?.getMonth()
    const day = date?.getDate();
    return `${day} ${monthMap[month]} ${year}`
}
const Orders = () => {
    // const { orders, currentUser } = useContext(UserContext)
    // const currentUser = useSelector(selectCurrentUser)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const orders = useSelector(selectUserOrders)
    // const navigate = useNavigate()
    useEffect(() => {
        if (!orders || orders.length <= 1) {
            setIsLoading(true)
            setTimeout(() => { setIsLoading(false) }, 3000)
        }
    }, [orders])

    // orders.sort((a,b) => new Date(a.createdAt?.seconds * 1000) - new Date(b.createdAt?.seconds * 1000))
    return (
        <>
            <div className="orders">
                {isLoading &&
                    <Spinner />
                }
                {orders.length >= 1 ? (<h1 className="orders__heading">Your Orders</h1>) : (<h1 className="orders__heading">You don't have any orders</h1>)}
                {orders.map(order => (
                    <div className="order__container" key={order.id}>

                        <div className="order__images__container">
                            {order.products.map(product =>
                                <img src={product.imageUrl} alt="" key={product.id} />
                            )}
                        </div>
                        <div className="order__info">
                            <p className="order__info__key">Order Id <span className="order__info__value">#{order.id}</span></p>
                            <p className="order__info__key">Order Placed <span className="order__info__value">{setDate(order?.createdAt?.seconds)}</span></p>
                            <p className="order__info__key">Order Total <span className="order__info__value">${order.orderTotal}</span></p>
                            <Button onClick={() => navigate(`/orders/${order.id}`)}>View Order</Button>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Orders