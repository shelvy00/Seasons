import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    constructor(props) {
      super(props);
      // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
      this.state = { lat: null, errorMessage: ""};
    }

    // Atlternate State Initialization
    // state = { lat: null, erroeMessage: "" };
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState to update our state object!!!
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
         );
    }

    componentDidUpdate() {
        console.log("My component was just updated it rerendered!");
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request" />;
     
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"))