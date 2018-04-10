import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { topics } from "../data.json";

export default class HighlightItem extends Component {
    render() {
        const topic = topics.find(t => t.id === this.props.id);
        return (
            <Link to={`/topic/${topic.id}`}>
                <li className="highlight-item">
                    <div>{topic.title}</div>
                </li>
            </Link>
        );
    }
}
