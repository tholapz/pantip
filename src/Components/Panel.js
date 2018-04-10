import React, { Component } from "react";

import './Panel.css';

export default class Panel extends Component {
    render() {
        return <div className="component-wrapper"><div className="component-inner">{this.props.children}</div></div>;
    }
}

