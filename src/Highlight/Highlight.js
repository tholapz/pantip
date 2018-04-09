import React, { Component } from "react";
import { highlights } from "../data.json";
import HighlightItem from "./HighlightItem";
import './Highlight.css';

export default class Highlight extends Component {
    state = {
        highlights: []
    }

    componentDidMount() {
        this.setState({ highlights });
    }

    render() {
        return (
            <ul className="highlight">
                { this.state.highlights.map(h => <HighlightItem id={h.id}/>) }
            </ul>
        );
    }
}
