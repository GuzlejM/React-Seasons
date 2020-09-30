import React from 'react';
import ReactDOM from 'react-dom';

// Importinh Season Display from the file SeasonDisplay.js which is in the same
// directory as file index.sj
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

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!')
    }
    // React says we have to define render !!

    // Rendering by Statemens of class App
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {

            return <SeasonDisplay  lat={this.state.lat}/>
        }
        return <div>Loading!</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));