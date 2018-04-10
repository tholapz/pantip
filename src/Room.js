import React, { Component } from 'react';

import './Room.css';
import Highlight from './Highlight';
import Topics from './Topics';

class Room extends Component {
    render() {
        return (
            <div className="App-container container">
                <Highlight />
                <Topics />
            </div>
        );
    }
}

export default Room;
