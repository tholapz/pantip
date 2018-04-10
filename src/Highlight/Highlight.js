import React, { Component } from "react";
import { highlights } from "../data.json";
import HighlightItem from "./HighlightItem";
import { Panel, ListContainer } from "../Components";
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
            <Panel>
                <ListContainer>
                    { this.state.highlights.map(id => <HighlightItem id={id}/>) }
                </ListContainer>
            </Panel>
        );
    }
}
