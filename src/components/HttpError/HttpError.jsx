import classes from "./HttpError.module.css";

const HttpError = (props) => {
    return (
        <section className={classes.error}>
            <p>{props.error}</p>
        </section>
    );
};

export default HttpError;
