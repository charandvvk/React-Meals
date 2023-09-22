// **********************************************************
// commented code gives undesired results on production build
// **********************************************************

// import { useEffect, useState } from "react";

import classes from "./HeaderImage.module.css";
import meals1 from "../../assets/meals1.webp";
import meals2 from "../../assets/meals2.jpeg";
import meals3 from "../../assets/meals3.webp";
import meals4 from "../../assets/meals4.jpeg";
import meals5 from "../../assets/meals5.png";
import meals6 from "../../assets/meals6.png";

const mealsImage = [meals1, meals2, meals3, meals4, meals5, meals6][
    Math.floor(Math.random() * 6)
];

function HeaderImage() {
    // const [currIndex, setCurrIndex] = useState(0);
    // const [isFadeActivated, setIsFadeActivated] = useState(true);
    // const [isIntervalReady, setIsIntervalReady] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCurrIndex((prevState) => ++prevState % 6);
    //         setIsFadeActivated(true);
    //     }, 4000);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [currIndex]);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCurrIndex((prevState) => ++prevState % 6);
    //     }, 4000);
    //     return () => {
    //         clearInterval(id);
    //     };
    // }, []);

    // useEffect(() => {
    //     const timer2 = setTimeout(() => {
    //         setIsIntervalReady(true);
    //         setIsFadeActivated(false);
    //     }, 2000);
    //     return () => {
    //         clearTimeout(timer2);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (isIntervalReady) {
    //         const timer3 = setInterval(() => {
    //             setIsFadeActivated(false);
    //         }, 4000);
    //         return () => {
    //             clearInterval(timer3);
    //         };
    //     }
    // }, [isIntervalReady]);

    return (
        <img
            // className={`${classes.image} ${
            //     isFadeActivated ? classes.fade : undefined
            // }`}
            className={classes.image}
            src={mealsImage}
            alt="A table full of delicious food!"
        />
    );
}

export default HeaderImage;
