import ShoppingCartItem from "./ShoppingCartItem";
import { ShoppingCartProduct } from "../../types/Product.interface";
import { useShoppingCartContext } from "../../context/GeneralContext";

export default function ShoppingCart() {
    const cartItems: ShoppingCartProduct[] = useShoppingCartContext();
    let total = 0;
    cartItems.forEach((el) => {
        total = total + el.quantity * el.price
    })

    return (<>
        <div
            className="relative border border-gray-200 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
        >
            <h1 className="text-2xl font-bold text-gray-700">ORDER</h1>
            <hr />
            <div className="mt-4 space-y-6">
                {/* ITEMS DEL CARRITO */}
                <ul className="space-y-4">
                    {cartItems.map(it => {
                        return <ShoppingCartItem key={it.id} product={it} />
                    })}
                </ul>

                {/* BOTON COMPRAR */}
                {cartItems.length > 0 ?
                    <div className="space-y-4 text-center">
                        <dl className="mt-0.5 space-y-px text-lg text-gray-600">
                            <div>
                                <span className="text-2xl font-bold">Total: </span>
                                <span className="text-2xl inline"> $ {total.toFixed(2)} </span>
                            </div>
                        </dl>

                        <a
                            href="#"
                            className="block rounded bg-gray-700 px-5 py-3 text-gray-100 text-xl font-bold transition tracking-widest
                            hover:bg-gray-600"
                        >
                            PROCEED TO CHECKOUT
                        </a>
                    </div> :
                    ""
                }
            </div>
        </div>
    </>);
}