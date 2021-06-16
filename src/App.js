import React, { Component } from 'react'
import Header from './component/Header';
import Post from './component/Post';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {getCategories} from './service/categories_api';
import Categories from './component/Categories';

export default class App extends Component {

  state = {
    categories :[],
    selectedCategory: { code:'all', name:'All'}
  }

  componentDidMount(){
    getCategories().then((categories)=>{
      // console.log(categories);
      this.setState({ categories : categories });
    }).catch((error)=>{
      console.log("Get categories failed !");
      console.log("Error",error);
    });
  }

  handleCategorySelect= (category) =>{
    this.setState({selectedCategory : category  })
  }
  
  render() {
    return (
      <div className="container">

      <Header />
      <Categories categories={this.state.categories} onCategorySelect={this.handleCategorySelect}/>
      <Post categories={this.state.categories} selectedCategory={this.state.selectedCategory}/>      
    </div>
    )
  }
}

