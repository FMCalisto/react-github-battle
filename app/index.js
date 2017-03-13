var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Francisco Maria Calisto',
  username: 'FMCalisto',
  image: 'https://avatars1.githubusercontent.com/u/1298239?v=3&u=56619520be38bdad7bff65bbdc0497981c5a4137&s=400'
}

var ProfilePic = React.createClass({
  render: function () {
    return (
      <img src={this.props.imageURL} style={{height: 250, width: 250}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'http://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageURL={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
