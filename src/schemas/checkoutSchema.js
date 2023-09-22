import { number, object, string } from "yup";

const checkoutSchema = object({
    name: string().required("Please enter a name!"),
    street: string().required("Please enter a street!"),
    postal: number()
        .required("Please enter a postal code!")
        .moreThan(10000, "Must be 5 characters long!")
        .lessThan(99999, "Must be 5 characters long!"),
    city: string().required("Please enter a city!"),
});

export default checkoutSchema;
