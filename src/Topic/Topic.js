import React, { Component } from "react";
import { topics } from "../data.json";
import './Topic.css';
import { Panel, Author } from "../Components";
import Comment from "../Comment";

export default class Topic extends Component {
    render() {
        const topic = topics.find(t => t.id === this.props.match.params.topicid);

        return (
            <div className="container">
                <Panel>
                    <h2 className="topic-detail-title">{topic.title}</h2>
                    <p className="topic-detail-text">{topic.detail}</p>
                    <Author id={topic.author}/>
                </Panel>
                <p>{topic.comments.length} ความคิดเห็น</p>
                {topic.comments.map((id, index) => <Comment key={index} nth={index+1} id={id}/>)}
            </div>
        )
    }
}