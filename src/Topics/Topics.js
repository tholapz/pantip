import React, { Component } from "react";
import PropTypes from "prop-types";

import { topics } from "../data.json";
import "./Topics.css";
import TopicItem from "./TopicItem";
import { Panel, ListContainer } from '../Components';

function fetchTopics(params) {
    return Promise.resolve({
        topics: topics.map(t => t.id),
        page: params + 1
    });
}
export default class Topics extends Component {
    static props = {};

    static defaultProps = {};

    state = {
        topics: [],
        page: 1
    };

    componentDidMount() {
        fetchTopics(this.state.page)
        .then(data => {
            this.setState(data);
        });
    }

    render() {
        return (
            <Panel>
                <ListContainer>
                    {this.state.topics.map(id => <TopicItem id={id} />)}
                </ListContainer>
            </Panel>
        );
    }
}
