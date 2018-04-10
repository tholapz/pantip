import React, { Component } from "react";
import { comments } from "../data.json";
import './Comment.css';
import { Panel, Author } from "../Components";

export default class Comment extends Component {
    render() {
        const comment = comments.find(c => c.id === this.props.id);
        return (
            <div className="comment-item">
                <Panel>
                    <span>ความคิดเห็นที่ {this.props.nth}</span>
                    <p>{comment.text}</p>
                    <Author id={comment.author}/>
                </Panel>
                { comment.comments.length > 0 && (
                    <div className="comment-well">
                        {comment.comments.map((id, i) => <Comment key={i} nth={`${this.props.nth}-${i + 1}`} id={id} />)}
                    </div>
                ) }
            </div>
        )
    }
}