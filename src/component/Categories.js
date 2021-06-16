import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        const categories = [
            { code:'all', name:'ALL'},
            ...this.props.categories
        ]
        return (
            <div className="col-sm-2">
                <h4>Catrgories</h4>
                <ul className="list-group">
                    { categories.map((category)=>{
                        return <li onClick={ ()=> {this.props.onCategorySelect(category);} }
                        className="list-group-item list-group-item-action"
                        key={category.code}> {category.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

