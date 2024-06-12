import { ShoppingCartProduct } from "../../types/Product.interface";

export default function ShoppingCartItem({ product }: { product: ShoppingCartProduct }) {

    return (<>
        <li className="flex items-center gap-4">
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
                        <button className="px-2 bg-red-400 text-white font-extrabold rounded-sm">-</button>
                        <span className="inline mx-2">{product.quantity}</span>
                        <button className="px-2 bg-green-400 text-white font-extrabold rounded-sm">+</button>
                    </div>
                </dl>
            </div>
        </li>
    </>);
}