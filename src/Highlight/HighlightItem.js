import React, { Component } from "react";
import PropTypes from "prop-types";
import { topics } from "../data.json";

export default class Highlight extends Component {
    click = id => {};

    render() {
        const topic = topics.find(t => t.id === this.props.id);
        
        return (<li className="highlight-item" onClick={this.click(`#${topic.id}`)}>{topic.title}</li>);
    }
}
