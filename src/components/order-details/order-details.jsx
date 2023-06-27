import "./order-details.scss"
import { useSelector } from "react-redux"
import { selectUserOrders } from "../../store/user/user.selector"
import { useParams } from "react-router-dom"
import { setDate } from "../routes/orders/orders.component"
import { useEffect } from "react"
const OrderDetails = () => {
    const { orderId } = useParams()
    const orders = useSelector(selectUserOrders)
    const [order] = orders.filter(order => order.id === orderId)

    useEffect(() => {
        
    }, [orderId])
    // console.log(orderId, order)

    // const { orderTotal, products, shippingAddress, createdAt } = order
    // const date = setDate(createdAt.seconds * 1000)
    // const {address, city, state, paymentMethod, pinCode} = shippingAddress
    return (
        <div className="orderDetails">
            {order ? <>
                <h1>Order Details : </h1>
                <p className="orderDetails__id">order id <span>#{order?.orderId}</span></p>
                <p className="orderDetails__date">order date <span>{order?.date}</span></p>
                <p className="orderDetails__total">order total <span>${order?.orderTotal}</span></p>

                <div className="orderDetails__products__container">
                    {
                        order?.products.map(product =>
                            <div className="orderDetails__product" key={product.id}>
                                <img src={product.imageUrl} alt={product.name} />
                                <div className="orderDetails__product__info">
                                    <p className="orderDetails__product__info name">{product.name}</p>
                                    <div className="orderDetails__product__price__info">
                                        <p className="price">${product.price}</p>
                                        <p className="quantity">qty <span>{product.quantity}</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="orderDetails__info">
                    <p className="orderDetails__payment__method">
                        payment method <span>{order?.shippingAddress?.paymentMethod}</span>
                    </p>
                    <p className="orderDetails__address">
                        Address <span>{`${order?.shippingAddress?.address}, ${order?.shippingAddress?.city}, ${order?.shippingAddress?.state}, ${order?.shippingAddress?.pinCode}`}</span>
                    </p>
                </div>
            </> : <p>...loading!</p>}
            
        </div>
        
    )
}

export default OrderDetails