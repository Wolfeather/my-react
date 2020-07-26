import React, { Component } from "react";
import PropTypes from "prop-types";

import "./commentItem.css";

export default class CommentItem extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired,
		key: PropTypes.number.isRequired,
		deleteComment: PropTypes.func.isRequired
	}

	deleteComment = ()=>{
		this.props.deleteComment(this.props.key)
	}
	render() {
		const { comment } = this.props;
		return (
			<li className="comment-item">
				<div className="handle">
					<a href="javascript:;" onClick={this.deleteComment}>删除</a>
				</div>
				<p className="user">{comment.user}</p>
				<p className="content">{comment.content}</p>
			</li>
		);
	}
}
