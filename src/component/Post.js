import React from 'react';
import PostDetail from './PostDetail';

class Post extends React.Component {

    constructor() {
        super();
        //event
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            post: {
                id: 0, title: '', body: '', author: '', category: ''
            },
            categories: [
                { code: 'react', name: 'React' },
                { code: 'redux', name: 'Redux' },
                { code: 'angular', name: 'Angular' }
            ],
            posts: [
                {
                    id: 1, title: 'Introduction to React js',
                    body: 'This post provides an introduction to react',
                    author: 'Harry', category: 'react'
                }, {
                    id: 2, title: 'Advance to React js',
                    body: 'This post provides an advance to react features',
                    author: 'Marry', category: 'react'
                }, {
                    id: 3, title: 'Introduction to Redux',
                    body: 'This post provides an introduction to react',
                    author: 'Jane', category: 'redux'
                }
            ]
        }
    }  //constructor

    //events handler
    handleFormSubmit(event) {
        //create post
        event.preventDefault();
        // console.log("This ;=> ",this);
        // console.log("Form Submitted : ",this.state.post);
        
        this.setState((prevState)=>{
            const id = prevState.posts.length === 0 ? 1 : prevState.posts[prevState.posts.length-1].id +1;
            const post  = { ...this.state.post , id:id};
            return {posts : [post, ...prevState.posts]}
        });
    }

    // title change
    handleTitleChange = (event) => {
        // console.log("Title ",event.target.value);
        const post = this.state.post;
        this.setState({ post : {...post , title : event.target.value}});        
    }

     // body change
     handleBodyChange = (event) => {
        // console.log("Title ",event.target.value);
        const post = this.state.post;
        this.setState({ post : {...post , body : event.target.value}});        
    }

     // title change
     handleAuthorChange = (event) => {
        // console.log("Title ",event.target.value);
        const post = this.state.post;
        this.setState({ post : {...post , author : event.target.value}});        
    }

     // title change
     handleCategoryChange = (event) => {
        // console.log("Title ",event.target.value);
        const post = this.state.post;
        this.setState({ post : {...post , category : event.target.value}});        
    }


    rederCategories() {
        return this.state.categories.map((category) => {
            return <option key={category.code} value={category.code} >{category.name}</option>
        });
    } //rederCategories

    renderPosts() {
        return (
            <div className="col-sm-8">
                <h3>Post Details</h3>
                {this.state.posts.map((post) => {
                    return <PostDetail key={post.id} post={post} />
                })}
            </div>
        );
    } // renderPosts

    renderForm() {
        return (
            <div className="col-sm-4">
                <h3>Post Form</h3>
                <div className="card bg-light">
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input type="text" className="form-control" id="title" name="title" placeholder="Enter title"
                                onChange={this.handleTitleChange} />
                            </div>
                            <div className="form-group">
                                <label for="body">Body</label>
                                <input type="text" className="form-control" id="body" name="body" placeholder="Enter body" 
                                onChange={this.handleBodyChange}/>
                            </div>
                            <div className="form-group">
                                <label for="author">Author</label>
                                <input type="text" className="form-control" id="author" name="author" placeholder="Enter author" 
                                onChange={this.handleAuthorChange}/>
                            </div>
                            <div className="form-group">
                                <label for="title">Categories</label>
                                <select class="form-control" id="category" name="category" value={this.state.post.category}
                                onChange={this.handleCategoryChange}>
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

    render() {
        return (
            <div className="row" >
                {this.renderForm()}
                {this.renderPosts()}
            </div>
        )
    }

} //Post

export default Post;