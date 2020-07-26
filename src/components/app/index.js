import React, { Component } from "react";
import History from "components/history";
import Comment from "components/comment";
import "./app.css";

export default class App extends Component {
	state = {
		comments:[
			{
				user:'xxx',
				content:'少林功夫好诶，真滴好'
			},
			{
				user:'yyy',
				content:'我是金刚腿，他是铁头功'
			}
		]
	}

	addComment = (comment)=>{
		let {comments} = this.state
		comments.unshift(comment)
		this.setState({
			comments
		})
	}

	deleteComment = (index)=>{
		let {comments} = this.state
		comments.splice(index,1)
		this.setState({
			comments
		})
	}

	render() {
		const {comments} = this.state
		return (
			<div>
				<div className="app-title">请发表对React的评论</div>
				<div>
					<Comment addComment={this.addComment}></Comment>
					<History comments={comments} deleteComment={this.deleteComment} ></History>
				</div>
			</div>
		);
	}
}
