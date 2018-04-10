import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BreadCrumb.css";

export default class BreadCrumb extends Component {
    static props = {
        top: PropTypes.string
    };

    static defaultProps = {
        top: ''
    }

    render() {
        return (
            <div className="bread-crumb-container">
                <div className="container">
                    <span className="glyphicon glyphicon-home" aria-hidden="true"/>
                    <span className="bread-crumb">{this.props.top}</span>
                </div>
            </div>
        );
    }
}
