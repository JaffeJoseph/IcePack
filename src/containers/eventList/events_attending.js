import React, { Component } from 'react';
import Event from './event';

class EventsAttending extends Component {
    constructor() {
        super();
        this.state = {
            title: "Super Sweet Dance Party",
            image: "",
            eventDate: "Wed, Febuary 28, 4pm",
            eventLocation: "The Highball, Austin",
        };
    }
    render() {
        return (
            <div>
                <Event card={this.state} />
            </div>
        );
    }
}

export default EventsAttending;
