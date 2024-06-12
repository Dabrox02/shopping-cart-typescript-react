import { useShoppingCartDispatchContext } from "../../context/GeneralContext";
import { ShoppingCartProduct } from "../../types/Product.interface";

export default function ShoppingCartItem({ product }: { product: ShoppingCartProduct }) {
    const shoppingCartDispatch: React.Dispatch<any> = useShoppingCartDispatchContext();

    return (<>
        <li className="flex items-center gap-4 relative">
            <button className="absolute end-4 top-[50%] text-gray-600 transition hover:scale-150" onClick={() => {
                shoppingCartDispatch({
                    type: "delete_product",
                    payload: product
                });
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <img
                src={product.image}
                alt=""
                className="size-24 rounded object-cover"
            />

            <div>
                <h3 className="text-xl text-gray-900">{product.title}</h3>

                <dl className="mt-0.5 space-y-px text-lg text-gray-600">
                    <div>
                        <span className="font-bold">Category: </span>
                        <span className="inline">{product.category}</span>
                    </div>

                    <div>
                        <span className="font-bold">Price: </span>
                        <span className="inline">${product.price}</span>
                    </div>
                    <div>
                        <span className="font-bold">Quantity: </span>
                        <button
                            className="px-2 bg-red-400 text-white font-extrabold rounded-sm transition hover:scale-110"
                            onClick={() => {
                                shoppingCartDispatch({
                                    type: "quit_product",
                                    payload: product
                                });
                            }}
                        >-</button>
                        <span className="inline mx-2">{product.quantity}</span>
                        <button
                            className="px-2 bg-green-400 text-white font-extrabold rounded-sm transition hover:scale-110"
                            onClick={() => {
                                shoppingCartDispatch({
                                    type: "add_product",
                                    payload: product
                                });
                            }}
                        >+</button>
                    </div>
                </dl>
            </div>
        </li>
    </>);
}