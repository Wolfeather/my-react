import React, { Component } from "react";
import PropTypes from 'prop-types'
import CommentItem from 'components/commentItem'

export default class History extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }
  render() {
    const {comments} = this.props , display = comments.length?'none':'block'
    return (
      <div className="history">
        <p>评论回复：</p>
        <h3 style={{display}}>暂无评论</h3>
        <ul className="history-comment">
          {comments.map((comment,index)=> <CommentItem comment={comment} key={index} deleteComment={this.props.deleteComment}/>)}
        </ul>
      </div>
    );
  }
}