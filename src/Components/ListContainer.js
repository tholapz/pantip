import React, { Component } from "react";

import './ListContainer.css';

export default class ListContainer extends Component {
    render() {
        return <ul className="list-wrapper">{this.props.children}</ul>;
    }
}

