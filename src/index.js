import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from './Spinner';

// Importing Season Display from the file SeasonDisplay.js which is in the same
// directory as file index.sj
import ErrorHandling from './ErrorHandling';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        // Making OBJECT called STATE with assinged properties lat: , errorMessage:
        // THIS IS THE ONLY TIME we do direct assignment
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        // Using built-in function windown.navigator.geolocation.getCurrentPosition()
        // to get location of the user. Asigning two callbacks positon and error 
        // which are changing states of properties of STATE OBJECT from ABOVE
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // componentDidUpdate() {
    //     console.log('My component was just updated - it rerendered!')
    // }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <ErrorHandling err={this.state.errorMessage} />
        }
        if (!this.state.errorMessage && this.state.lat) {
            // SeasonDisplay component imported from SeasonDisplay.js
            // Setting prop lat={this.state.lat};
            //Sending value of prop to SeasonDisplay.js *
            return <SeasonDisplay  lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request"/>
    }
    // React says we have to define render !!
    // Rendering by Statemens of class App
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));