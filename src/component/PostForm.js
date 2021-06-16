import React, { Component } from 'react'

export default class PostForm extends Component {
    state = {
         title: '', body: '', author: '', category: ''
    };

    //handle change
    handleChange = (event) => {
       const fieldName =  event.target.name;
       const fielfValue = event.target.value;
       this.setState({ [fieldName]:fielfValue});      
    }

    //events handler
    handleFormSubmit = (event) => {
         //create post
        event.preventDefault();
        this.props.onNewPost(this.state);
        //after submit form make form empty fields
        this.setState({
            title: '', body: '', author: '', category: ''
        });       
    }

    rederCategories() {
        return this.props.categories.map((category) => {
            return <option key={category.code} value={category.code} >{category.name}</option>
        });
    } //rederCategories

    render() {
        return (
            <div className="col-sm-5">
                <h3>Post Form</h3>
                <div className="card bg-light">
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input type="text" className="form-control" id="title" name="title" placeholder="Enter title"
                                onChange={this.handleChange}  value={this.state.title}/>
                            </div>
                            <div className="form-group">
                                <label for="body">Body</label>
                                <input type="text" className="form-control" id="body" name="body" placeholder="Enter body" 
                                onChange={this.handleChange}  value={this.state.body}/>
                            </div>
                            <div className="form-group">
                                <label for="author">Author</label>
                                <input type="text" className="form-control" id="author" name="author" placeholder="Enter author" 
                                onChange={this.handleChange}  value={this.state.author}/>
                            </div>
                            <div className="form-group">
                                <label for="title">Categories</label>
                                <select class="form-control" id="category" name="category" value={this.state.category}
                               onChange={this.handleChange}>
                                    <option value="">...</option>
                                    {this.rederCategories()}
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
