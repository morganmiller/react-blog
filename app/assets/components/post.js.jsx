var Post = React.createClass({
  render: function(){
    return(
      <div className="post">
        <PostHeader post={this.props.post} />
        <PostContent post={this.props.post} />
      </div>
    );
  }
});
