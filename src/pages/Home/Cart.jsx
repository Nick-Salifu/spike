import { useCartStore } from "../../store/cartStore"

function Cart() {
   const { cart, quantity, removeFromCart, clearCart } = useCartStore((state) => ({
        cart: state.cart,
        quantity: state.quantity,
        removeFromCart: state.removeFromCart,
        clearCart: state.clearCart
    }))

    return (
        <div className="mt-28 max-w-screen-2xl mx-auto container xl:px-28 px-4">
            <div className="py-5 max-w-7xl">
                <h1 className="title">Welcome to the cart section</h1>

                <div>
                    {cart.map((product) => (
                        <div key={product.id}>
                            <div>{product.image}</div>
                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart
