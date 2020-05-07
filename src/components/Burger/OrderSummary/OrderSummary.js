import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {

    componentDidUpdate(){
        console.log("[OrderSummary] DidUpdate");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey =>
                <li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
            </Aux >
        );
    };
};

export default OrderSummary;