import { useShoppingCartDispatchContext } from '../../context/GeneralContext';
import { Product } from '../../types/Product.interface';

export default function ProductItem({ product }: { product: Product }) {
    const shoppingCartDispatch: React.Dispatch<any> = useShoppingCartDispatchContext();
    
    return (<>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg my-6 cursor-pointer" key={product.id} onClick={() => {
            shoppingCartDispatch({
                type: "add_product",
                payload: {
                    ...product,
                    quantity: 1
                }
            });
        }}>
            <img
                alt=""
                src={product.image}
                className="h-56 w-full object-cover object-top"
            />

            <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">{product.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm/rproductaxed text-gray-500">
                    {product.description}
                </p>
            </div>
        </article>
    </>);
}