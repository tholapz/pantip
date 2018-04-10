import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { topics } from "../data.json";
import "./BreadCrumb.css";

export default class BreadCrumb extends Component {
    static props = {
        top: PropTypes.string,
    };

    static defaultProps = {
        top: '',
    }

    render() {
        const topicId = window.location.hash.substr(8);
        const topic = topics.find(t => t.id === topicId);

        return (
            <div className="bread-crumb-container">
                <div className="container">
                    <span className="bread-crumb">
                        <Link to="/">
                            <span className="glyphicon glyphicon-home" aria-hidden="true"/>
                            { ` ${this.props.top}` }
                        </Link>
                    </span>
                    { topic && (
                        <span>
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                            { ` ${topic.title}` }
                        </span>
                    )}
                </div>
            </div>
        );
    }
}
