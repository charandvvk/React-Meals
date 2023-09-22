import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import HttpError from "../HttpError/HttpError";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
    const [isCheckedOut, setIsCheckedOut] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const cartCtx = useContext(CartContext);

    const {
        isInProgress: isSending,
        error,
        sendRequest: sendOrder,
    } = useHttp();

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        item = { ...item, quantity: 1 };
        cartCtx.addItem(item);
    };

    const checkoutHandler = () => {
        setIsCheckedOut(true);
    };

    const onOrderSent = () => {
        setIsSent(true);
        cartCtx.clearCart();
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={checkoutHandler}>
                    Checkout
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckedOut && (
                <Checkout
                    onSubmitOrder={(userData) => {
                        sendOrder(
                            {
                                url: "https://reactmeals-84f23-default-rtdb.firebaseio.com//orders.json",
                                method: "POST",
                                body: JSON.stringify({
                                    user: userData,
                                    orderedItems: cartCtx.items,
                                }),
                                headers: { "Content-Type": "application/json" },
                            },
                            onOrderSent
                        );
                    }}
                    onCancel={props.onClose}
                />
            )}
            {!isCheckedOut && modalActions}
        </>
    );

    const isSendingModalContent = <p>Sending order data...</p>;

    const isSentModalContent = (
        <>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </>
    );

    const httpErrorModalContent = (
        <>
            <HttpError error={error} />
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSending && !isSent && !error && cartModalContent}
            {isSending && isSendingModalContent}
            {isSent && isSentModalContent}
            {error && httpErrorModalContent}
        </Modal>
    );
};

export default Cart;
