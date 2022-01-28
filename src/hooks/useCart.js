import { useState, useEffect, useMemo } from "react"

const useCart = () => {
    const [ cart, updateCart ] = useState([]);

    useEffect(() => {
        var carts = localStorage.getItem('cart');
        if (carts)
            updateCart(JSON.parse(carts));
    }, []);

    useEffect(() => {
        if (cart.length > 0)
            localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    var total = useMemo(() => {
        return cart.reduce(
            (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        );
    }, [cart]);

    const update = (id, name, price) => {
        var found = cart.find((elem) => elem.id === id);
        if (!found)
            updateCart((carts) => {
                return [
                    ...carts,
                    { id, name, price , amount: 1 }
                ]
            })
        else {
            updateCart((carts) => {
                return carts.map((elem) => {
                    if (elem.id === id)
                        elem.amount++;
                    return elem;
                })
            })
        }
    }

    const reset = () => updateCart([]);

    return { cart, total, reset, update };
}

export default useCart;