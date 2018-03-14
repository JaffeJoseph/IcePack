import React, { Component } from 'react';
import EventsList from './home/events_list';
import PeopleList from './home/people_list';
import Profile from './home/profile';

class HomePage extends Component {
    constructor() {
        super();
        this.showHidden = this.showHidden.bind(this);
        this.state = {
            event: true,
            people: true,
            profile: true,
        };
    }
    showHidden(e) {
        const toBeVisible = e.target.id;
        const tabs = ["event", "people", "profile"];
        tabs.forEach(x => ((x===toBeVisible)? this.setState({ [x]: false }) : this.setState({ [x]: true })));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12 text-center">Home</h1>
                </div>
                <div className="row btn-group d-flex">
                    <button
                        id="event"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                        Events
                    </button>
                    <button
                        id="people"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                        People
                    </button>
                    <button
                        id="profile"
                        className="btn btn-primary col-md-4"
                        onClick={this.showHidden}
                    >
                        Profile
                    </button>
                </div>
                <div>
                    {!this.state.event && <EventsList />}
                    {!this.state.people && <PeopleList />}
                    {!this.state.profile && <Profile />}
                </div>
            </div>
        );
    }
}

export default HomePage;
