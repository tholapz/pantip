import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { topics } from "../data.json";

export default class TopicItem extends Component {
    render() {
        const topic = topics.find(t => t.id === this.props.id);

        return (
            <li className="topic-item">
                <Link to={`/topic/${topic.id}`}>
                    <span className="topic-title">{topic.title}</span>
                </Link>
                <div className="topic-detail">
                    <div className="topic-author">สมาชิกหมายเลข {topic.author}</div>
                </div>
            </li>
        );
    }
}
