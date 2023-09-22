import { useCallback, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const cartVisibilityHandler = useCallback(() => {
        setIsCartVisible((prevState) => !prevState);
    }, []);

    return (
        <CartProvider>
            {isCartVisible && <Cart onClose={cartVisibilityHandler} />}
            <Header onShowCart={cartVisibilityHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
