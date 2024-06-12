import { useFetch } from "../../hooks/useFetch";
import { Product } from '../../types/Product.interface';
import ProductItem from "./ListProductItem";

export default function ListProducts({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const { data, loading, error }: {
        data: Product[] | null, loading: boolean, error: any
    } = useFetch("https://fakestoreapi.com/products");

    if (error) {
        return <p>Ocurrio un error al obtener datos</p>
    }

    return (<>
        {loading ?
            <div>
                Obteniendo datos
            </div> :
            <div className={className}>
                {
                    data!.map((el) => {
                        return <ProductItem key={el.id} product={el} />
                    })
                }
            </div>
        }
    </>);
}