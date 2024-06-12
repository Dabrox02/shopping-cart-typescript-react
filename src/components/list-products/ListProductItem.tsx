import { Product } from '../../types/Product.interface';

export default function ProductItem({ product }: { product: Product }) {

    function handleClick() {
    }

    return (<>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg my-6 cursor-pointer" key={product.id} onClick={handleClick}>
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