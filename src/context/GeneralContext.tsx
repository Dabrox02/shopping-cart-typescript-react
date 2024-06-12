import { createContext, Dispatch, useContext, useReducer } from "react";

const ShoppingCartContext: any = createContext([]);
const ShoppingCartDispatchContext: any = createContext(null);

export function useShoppingCartContext(): [] {
    return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatchContext(): Dispatch<any> {
    return useContext(ShoppingCartDispatchContext);
}

export function shoppingCartReducer(state: any, action: any) {
    switch (action.type) {
        case 'add_product': {
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        }
    }
}

export default function ShoppingCartProvider({ children }: { children: React.ReactNode; }) {
    const [products, dispatchProducts] = useReducer(shoppingCartReducer, [])

    return (<ShoppingCartContext.Provider value={products}>
        <ShoppingCartDispatchContext.Provider value={dispatchProducts}>
            {children}
        </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>)
}


// export const ShoppingCartContext = createContext([{
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// },]);

