import React, { Component } from 'react';

import Post from '../post';

import './post-list.css';

export default class PostList extends Component {

    state = {
        items: ''
    }

    componentDidMount = () => {
        // console.log('monuer',this.props.items)
        // this.setState({items: this.props.items})
    }
     
    showList = (items) => {

        const itemsArray = [...items]
        if (itemsArray.length > 0){

        }
        let sortedByHihgest = itemsArray.sort((a,b) => b.id - a.id)
        
        
        return sortedByHihgest.map((item) => {

            return (
                <Post onDeleted={(e) => this.props.onDeleted(item.id, itemsArray)}
                                        user={this.props.user} 
                                        key={item.id + `post`} 
                                        item={item}/>        
            )   
        });
    }

    render() {
       const items = this.props.items
       const items_list = this.showList(items)
       
       return (
           <div className="items-list">   
               {items_list}       
           </div>
       )
   }
}

 