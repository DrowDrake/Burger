import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
    shouldComponentUpdate(nextProp, nextState) {
        return nextProp.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log("[Modal] DidUpdate");
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translate(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    };
}

export default Modal;