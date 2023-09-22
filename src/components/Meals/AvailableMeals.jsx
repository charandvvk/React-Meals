import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import HttpError from "../HttpError/HttpError";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    const {
        isInProgress: isFetching,
        error,
        sendRequest: fetchMeals,
    } = useHttp();

    useEffect(() => {
        const onDataFetched = (data) => {
            const loadedMeals = [];
            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                });
            }
            setMeals(loadedMeals);
        };
        fetchMeals(
            {
                url: "https://reactmeals-84f23-default-rtdb.firebaseio.com/meals.json",
            },
            onDataFetched
        );
    }, [fetchMeals]);

    if (isFetching) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (error) {
        return <HttpError error={error} />;
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
