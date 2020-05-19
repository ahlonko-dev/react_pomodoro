import React from "react";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    return (
        <section>
            <section>
                <Button
                    className={"plus btn-success"}
                    onClick={increaseSession}>
                    {"+"}
                </Button>
                <br />
                <Button
                    className={"moins btn-success"}
                    onClick={decreaseSession}>
                    {"-"}
                </Button>
            </section>
        </section>
    );
}
export default SessionLength;
