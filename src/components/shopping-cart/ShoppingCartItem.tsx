import { Product } from '../../types/Product.interface';

export default function ShoppingCartItem({ product }: { product: Product }) {

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
                        <dt className="inline font-bold">Category: </dt>
                        <dd className="inline">{product.category}</dd>
                    </div>

                    <div>
                        <dt className="inline font-bold">Price: </dt>
                        <dd className="inline">${product.price}</dd>
                    </div>
                </dl>
            </div>
        </li>
    </>);
}