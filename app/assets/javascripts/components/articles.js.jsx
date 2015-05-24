var ArticleBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <ArticleList data={this.state.data} />
    );
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.articles});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
})

var ArticleList = React.createClass({
  render: function() {
    var articleList = this.props.data.map(function(a) {
      return <Article path={a.path} title={a.title} time={a.created_at} />;
    });
    return (
      <ul className="articles-list">
        {articleList}
      </ul>
    );
  }
});

var Article = React.createClass({
  render: function() {
    return (
      <li className="article-list-item">
        <a href={this.props.path} className="article-link">
          <p className="article-title">{this.props.title}</p>
          <p className="article-time muted">{this.props.time}</p>
        </a>
    </li>
    );
  }
});
