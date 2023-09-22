import { useRef } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const quantityInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredQuantity = +quantityInputRef.current.value;
        props.onAddToCart(enteredQuantity);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={quantityInputRef}
                label="Quantity"
                input={{
                    id: "quantity_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                    required: true,
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;
