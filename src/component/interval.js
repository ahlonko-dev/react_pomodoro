import React from "react";

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }
    return (
        <section>
            <section className={"interval-container1"}>
                <div
                    className={"interval-container1"}
                    onClick={decreaseCounter}
                />
                <div
                    className={"interval-container1"}
                    onClick={increaseCounter}
                />
            </section>
        </section>
    );
}
export default BreakInterval;
