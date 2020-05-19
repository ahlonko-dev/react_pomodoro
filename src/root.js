/* eslint-disable react/no-access-state-in-setstate */
import React from "react";
import "./app.css";
import BreakInterval from "./component/interval";
import SessionLength from "./component/session";
import Timer from "./component/timer";

class RootComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
        };
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onToggleIntarval = this.onToggleIntarval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
    }

    onIncreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength + 1,
        }));
    }
    onDecreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength - 1,
        }));
    }

    //session
    onIncreaseSessionLength() {
        this.setState(prevState => ({
            sessionLength: prevState.sessionLength + 1,
            timerMinute: prevState.sessionLength + 1,
        }));
    }
    onDecreaseSessionLength() {
        this.setState(prevState => ({
            sessionLength: prevState.sessionLength - 1,
            timerMinute: prevState.sessionLength - 1,
        }));
    }

    onUpdateTimerMinute() {
        this.setState(prevState => ({
            timerMinute: prevState.timerMinute - 1,
        }));
    }

    onToggleIntarval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakLength,
            });
        }
    }

    onResetTimer() {
        this.setState({
            timerMinute: this.state.sessionLength,
        });
    }

    render() {
        return (
            <main>
                <section className={"interval-length-container"}>
                    <BreakInterval
                        breakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionLength
                        sessionLength={this.state.sessionLength}
                        increaseSession={this.onIncreaseSessionLength}
                        decreaseSession={this.onDecreaseSessionLength}
                    />
                </section>
                <div className={"timer "}>
                    <Timer
                        timerMinute={this.state.timerMinute}
                        breaklength={this.state.breaklength}
                        toggleIntarval={this.onToggleIntarval}
                        updateTimerMinute={this.onUpdateTimerMinute}
                        resetTimer={this.onResetTimer}
                    />
                </div>
            </main>
        );
    }
}

export default RootComponent;
