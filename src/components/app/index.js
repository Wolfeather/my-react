import React, { Component } from "react";
import {Button,Toast} from "antd-mobile";
import "./app.css";
import {INCREMENT,DECREMENT} from 'redux/action-types'
import * as actions from "redux/actions";
export default class App extends Component {

	add = ()=>{
		let step = this.select.value * 1
		this.props.store.dispatch(actions.increment)
	}
	reduce = ()=>{
		let step = this.select.value * 1
		this.props.store.dispatch({type:DECREMENT,data:step})
	}
	render() {
		const count = this.props.store.getState()
		return (
			<div>
				<p> click {count} times</p>
				<div>
					<select ref={select=>this.select=select}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select> &nbsp;
					<button onClick={this.add}>+</button>&nbsp;
					<button onClick={this.reduce}>-</button>&nbsp;
					<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
					<button onClick={this.incrementAsync}>increment async</button>&nbsp;
				</div>
			</div>
		);
	}
}
