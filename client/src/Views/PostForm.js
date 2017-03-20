import React from 'react';

//the form for the post container. (for the client)
var PostForm = React.createClass ({
  render() {
    return (
      <div>
        <h2> dummy </h2>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label>title of blog</label>
              <input onChange={ (event) => this.props.updateTitle(event.target.value)}
              type="text" className="form-control" id="" placeholder="title"/>
            </div>
            <div>
              <label>content of blog</label>
              <input onChange={ (event) => this.props.updateContent(event.target.value)}
              type="text" className="form-control" id="" placeholder="content"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
});

export default PostForm;
