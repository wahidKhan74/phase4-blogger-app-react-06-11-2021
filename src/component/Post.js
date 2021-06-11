import React from 'react';
import PostDetail from './PostDetail';

class Post extends React.Component {

    constructor() {
       super();
       this.state =  {
        post : {
            id :0, title:'', body:'', author:'', category:''
        },
        categories: [
            { code:'react' , name:'React'},
            { code:'redux' , name:'Redux'},
            { code:'angular' , name:'Angular'}
        ],
        posts: [
            {
                id:1, title :'Introduction to React js',
                body: 'This post provides an introduction to react',
                author :'Harry' , category:'react'
            }, {
                id:2, title :'Advance to React js',
                body: 'This post provides an advance to react features',
                author :'Marry' , category:'react'
            } , {
                id:3, title :'Introduction to Redux',
                body: 'This post provides an introduction to react',
                author :'Jane' , category:'redux'
            }
        ]
       }
    }  //constructor

    rederCategories() {
        return this.state.categories.map((category)=>{
        return <option key={category.code} value={category.code} >{category.name}</option>
    });
    } //rederCategories

    renderPosts() {
        return (
            <div className="col-sm-8">
                <h3>Post</h3>
                {this.state.posts.map((post)=>{
                    return  <PostDetail key={post.id} post={post} />
                })}
            </div>
        );
    } // renderPosts

    render() {
        return (
            <div className="row" >
                {this.renderPosts()}
            </div>
        )
    }

} //Post

export default Post;