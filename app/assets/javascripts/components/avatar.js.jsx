var Avatar = React.createClass({
  render: function() {
    return (
      <div> 
        <ProfilePic username={this.props.username} /> 
      </div>
      );
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />
    );
  }
});
