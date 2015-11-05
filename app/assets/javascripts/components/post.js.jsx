//Whole post - parent
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

//Header - child
var PostHeader = React.createClass({
  render: function() {
    return (
      <div className="post-header">
        <h2>{this.props.post.title}</h2>
        <div className="post-meta">
          By {this.props.post.author}
        </div>
      </div>
    );
  }
});

//Content - child
var PostContent = React.createClass({
  render: function() {
    return (
      <div className="post-contents">
        {this.props.post.contents}
      </div>
    );
  }
});
