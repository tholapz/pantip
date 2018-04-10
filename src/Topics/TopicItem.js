import React, { Component } from "react";
import PropTypes from "prop-types";
import { topics } from "../data.json";

export default class TopicItem extends Component {
    click = id => {

    };

    render() {
        const topic = topics.find(t => t.id === this.props.id);

        return (
            <li className="topic-item" onClick={this.click(`#${topic.id}`)}>
                <span className="topic-title">{topic.title}</span>
                <div className="topic-detail">
                    <div className="topic-author">สมาชิกหมายเลข {topic.author}</div>
                </div>
            </li>
        );
    }
}
