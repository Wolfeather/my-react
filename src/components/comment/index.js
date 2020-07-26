import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class Comment extends Component {

  state = {
    user: '',
    content: ''
  }
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  addComment = ()=>{
    // 拿数据
    const comment = this.state
    // 更新状态
    this.props.addComment(comment)
    // 清空
    this.setState({
      user: '',
      content: ''
    })
  }

  nameChange = (e) => {
    const user = e.target.value
    this.setState({user})
  }

  contentChange = (e) => {
    const content = e.target.value
    this.setState({content})
  }

  render() {
    const {user,content} = this.state
    return (
      <div className="comment">
        <p>用户名</p>
        <input type="text" placeholder="用户名" 
          value={user} onChange={this.nameChange}/>
        <p>评论内容</p>
        <textarea  rows="6" placeholder="评论内容"
          value={content} onChange={this.contentChange}/>
        <button onClick={this.addComment}>留言</button>
      </div>
    );
  }
}