import React, { Component } from "react";

import './Author.css';

export default class Author extends Component {
    render() {
        return <div className="topic-detail-author">สมาชิกหมายเลข {this.props.id}</div>;
    }
}