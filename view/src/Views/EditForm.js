import React from 'react';

//the form for the edit container (for the client)
var EditForm = React.createClass ({
  render() {
    return (
      <div className="container">
        <h2> Edit Form </h2>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label>title of blog</label>
              <input onChange={ (event) => this.props.updateTitle(event.target.value)}
              type="text" className="input-title" id="" placeholder="title" value={this.props.title}/>
            </div>
            <div>
              <label>content of blog</label>
              <textarea onChange={ (event) => this.props.updateContent(event.target.value)}
              type="text" className="input-content" id="" placeholder="content" value={this.props.content}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
});

export default EditForm;
