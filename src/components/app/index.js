import React, { Component } from "react";
import {NavLink,Switch,Link,Route,Redirect} from 'react-router-dom';

import History from "components/history";
import Comment from "components/comment";
import About from 'components/about'
import Home from 'components/home'
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
				<div className="nf">
					<Comment addComment={this.addComment}></Comment>
					<History comments={comments} deleteComment={this.deleteComment} ></History>
				</div>
				<div className="fl">
					<ul>
						<li>
							<NavLink to="/about">about</NavLink>
						</li>
						<li>
							<NavLink to="/home">home</NavLink>
						</li>
					</ul>
				</div>
				<div className="fl">
					<Switch>
						<Route path="/about" component={About}></Route>
						<Route path="/home" component={Home}></Route>
						<Redirect to="/home"></Redirect>
					</Switch>
				</div>
			</div>
		);
	}
}
