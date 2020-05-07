import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";


const controlsList = [
    { label: "Meat", type: "meat" },
    { label: "Tomato", type: "tomato" },
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controlsList.map(ctrlButton => (
            <BuildControl
                key={ctrlButton.label}
                label={ctrlButton.label}
                added={() => props.ingredientAdded(ctrlButton.type)}
                removed={() => props.ingredientRemoved(ctrlButton.type)}
                disabled={props.disabled[ctrlButton.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;