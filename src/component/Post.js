import React from 'react';
import PostDetail from './PostDetail';
import { getPosts, addPosts, deletePost } from '../service/post_api';
import PostForm from './PostForm';

class Post extends React.Component {

    constructor() {
        super();
        
        this.state = {
            posts: []
        };
    }  //constructor

    //component lifecycle methods
    componentDidMount() {

        getPosts().then((posts)=>{
            console.log(posts);
            this.setState({ posts : posts });
        }).catch((error)=>{
            console.log("Get posts failed !");
            console.log("Error",error);
        });
    }

    // add post 
    handleNewPost =(post)=>{
        addPosts(post).then((newPost)=>{
            console.log(newPost);            
            this.setState((prevSate)=> {
                return { posts : [...prevSate.posts,newPost] }
            });
        }).catch((error)=>{
            console.log("Add posts failed !");
            console.log("Error",error);
        });
    }

    generateId(posts) {
        const newId = posts.length == 0 ? 1 : posts[posts.length-1].id +1;
        return newId;
    }

    handleDelete = (id) =>{
        deletePost(id).then(()=>{
            this.setState((prevSate)=>{
                const filteredPosts = prevSate.posts.filter((post)=>{
                    return post.id !== id;
                });
                return {posts: filteredPosts};
            });
        }).catch((error)=>{
            console.log("Delete posts failed !");
            console.log("Error",error);
        });
    }
    
    renderPosts() {
        const filteredPosts = this.props.selectedCategory.code==='all' ?
        this.state.posts : this.state.posts.filter((post)=>{
            return post.category === this.props.selectedCategory.code
        });

        return (
            <div className="col-sm-7">
                <h3>Post Details</h3>
                <h5>Category : {this.props.selectedCategory.name}</h5>
                {filteredPosts.map((post) => {
                    return <PostDetail key={post.id} post={post} onDelete={this.handleDelete}/>
                })}
            </div>
        );
    } // renderPosts

    renderForm() {
        return (
            <PostForm categories={this.props.categories} onNewPost={this.handleNewPost}/>
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