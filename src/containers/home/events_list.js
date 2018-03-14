import React, { Component } from 'react';
import EventDetails from '../eventList/event_details';
import EventsAttending from '../eventList/events_attending';

class EventList extends Component {
    constructor() {
        super();
        this.showHidden = this.showHidden.bind(this);
        this.state = {
            eventDetails: true,
            eventsAttending: true,
        };
    }

    showHidden(e) {
        const toBeVisible = e.target.id;
        const tabs = ["eventDetails", "eventsAttending"];
        tabs.forEach(x => ((x===toBeVisible)? this.setState({ [x]: false }) : this.setState({ [x]: true })));
    }

    render() {
        return (
            <div>
                <div className="row btn-group d-flex">
                    <button
                        id="eventDetails"
                        className="btn btn-primary col-md-6"
                        onClick={this.showHidden}
                    >
                        Events List
                    </button>
                    <button
                        id="eventsAttending"
                        className="btn btn-primary col-md-6"
                        onClick={this.showHidden}
                    >
                        Events Im Attending
                    </button>
                    <div>
                        {!this.state.eventDetails && <EventDetails />}
                        {!this.state.eventsAttending && <EventsAttending />}
                    </div>
                </div>
            </div>
        );
    }
}

export default EventList;
