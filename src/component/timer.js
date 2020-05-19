/* eslint-disable react/jsx-handler-names */
import React from "react";
import {Button} from "react-bootstrap";

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
        };
        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        const intervalId = setInterval(this.decreaseTimer, 1000);

        this.setState({
            intervalId,
        });
    }
    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                this.props.updateTimerMinute();
                this.setState({
                    timerSecond: 59,
                });
                break;
            default:
                this.setState(prevState => ({
                    timerSecond: prevState.timerSecond - 1,
                }));
                break;
        }
    }
    stopTimer() {
        clearInterval(this.state.intervalId);
    }
    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.setState({
            timerSecond: 0,
        });
    }

    render() {
        return (
            <section>
                <section className={"timer-container"}>
                    <h4>{this.state.isSession === true ? "Time" : "Break"}</h4>
                    <span>{this.props.timerMinute}</span>
                    <span>{":"}</span>
                    <span>
                        {this.state.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                            ? `0${this.state.timerSecond}`
                            : this.state.timerSecond}
                    </span>
                </section>
                <section className={"timer-actions"}>
                    <Button onClick={this.playTimer}>{"Play"}</Button>
                    <br />
                    <Button onClick={this.stopTimer}>{"Stop"}</Button>
                    <br />
                    <Button onClick={this.resetTimer}>{"Reset"}</Button>
                </section>
            </section>
        );
    }
}
export default Timer;
