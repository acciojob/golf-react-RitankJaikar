import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false, // To track if the ball should be rendered
            posi: 0, // Initial position of the ball in pixels
            ballPosition: { left: "0px" } // CSS style for ball position
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // Handles the click event for the Start button
    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    // Renders either the Start button or the ball based on state
    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    // Handles the ArrowRight key press event to move the ball
    handleKeyDown(event) {
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState((prevState) => {
                const newPosition = prevState.posi + 5; // Increment position by 5px
                return {
                    posi: newPosition,
                    ballPosition: { left: `${newPosition}px` } // Update ball position
                };
            });
        }
    }

    // Add event listener for keydown when component mounts
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    // Clean up event listener when component unmounts
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
