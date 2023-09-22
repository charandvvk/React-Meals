import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [isBumpActivated, setIsBumpActivated] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const totalQuantity = items.reduce((currNumber, item) => {
        return currNumber + item.quantity;
    }, 0);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsBumpActivated(true);
        const timer = setTimeout(() => {
            setIsBumpActivated(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button
            className={`${classes.button} ${isBumpActivated && classes.bump}`}
            onClick={props.onClick}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
        </button>
    );
};

export default HeaderCartButton;
