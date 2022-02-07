import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents()
      .then((events) => {
        if (this.mounted) {
          console.log("hey");
        }
        //   this.setState({
        //     events: events.slice(0, this.state.numberOfEvents),
        //     locations: extractLocations(events),
        //   });
        // }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentWillUnmount() {
    // this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h1>YOO</h1>
      </div>
    );
  }
}

export default App;
