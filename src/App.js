import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';



class App extends Component {
  render() {
    return (
      <h1>HELLO</h1>
    )
  }
  // state = {
  //   events: [],
  //   locations: [],
  //   numberOfEvents: 32
  // };

  // componentDidMount() {
  //   this.mounted = true;
  //   getEvents().then((events) => {
  //     if (this.mounted) {
  //       this.setState({
  //         events: events.slice(0, this.state.numberOfEvents),
  //         locations: extractLocations(events)
  //       });
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.mounted = false;
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
  //       <EventList events={this.state.events} />
  //       <NumberOfEvents numberOfEvents={this.state.numberOfEvents} />
  //     </div>
  //   );
  // }

  // updateEvents = (location) => {
  //   getEvents().then((events) => {
  //     const locationEvents = (location === 'all') ?
  //       events :
  //       events.filter((event) => event.location === location);
  //     if (this.mounted) {
  //       this.setState({
  //         events: locationEvents.slice(0, this.state.numberOfEvents),
  //         currentLocation: location,
  //       });
  //     }
  //   });
  // }
}

export default App;