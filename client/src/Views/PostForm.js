import React from 'react';

//the form for the post container. (for the client)
var PostForm = React.createClass ({
  render() {
    return (
      <div className="container">
        <h2> SPEAK YOUR MIND, BARE YOUR SOUL </h2>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label>title</label>
              <input onChange={ (event) => this.props.updateTitle(event.target.value)}
              type="text" className="form-control input-title" id="" placeholder="title"/>
            </div>
            <div>
              <label>content</label>
              <textarea onChange={ (event) => this.props.updateContent(event.target.value)}
              type="text" className="input-content" id="" placeholder="content"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
});

export default PostForm;
