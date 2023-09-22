import { useFormik } from "formik";
import checkoutSchema from "../../schemas/checkoutSchema";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            street: "",
            postal: "",
            city: "",
        },
        validationSchema: checkoutSchema,
        onSubmit: (values) => {
            props.onSubmitOrder(values);
        },
    });

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div
                className={`${classes.control} ${
                    errors.name && classes.invalid
                }`}
            >
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <p className={classes.invalid}>{errors.name}</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    errors.street && classes.invalid
                }`}
            >
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    value={values.street}
                    onChange={handleChange}
                />
                {errors.street && (
                    <p className={classes.invalid}>{errors.street}</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    errors.postal && classes.invalid
                }`}
            >
                <label htmlFor="postal">Postal Code</label>
                <input
                    type="number"
                    id="postal"
                    value={values.postal}
                    onChange={handleChange}
                />
                {errors.postal && (
                    <p className={classes.invalid}>{errors.postal}</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    errors.city && classes.invalid
                }`}
            >
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    value={values.city}
                    onChange={handleChange}
                />
                {errors.city && (
                    <p className={classes.invalid}>{errors.city}</p>
                )}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit" className={classes.submit}>
                    Order
                </button>
            </div>
        </form>
    );
};

export default Checkout;
