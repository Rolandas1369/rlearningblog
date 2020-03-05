import React, { Component } from 'react';

import Post from '../post';

import './post-list.css';

export default class PostList extends Component {

    state = {
        items: ''
    }

    

    componentDidMount = () => {
        console.log('monuer',this.props.items)
        this.setState({items: this.props.items})
    }

               
    showList = (items) => {

        const items1 = [...items]
        console.log('from showList', items1[0])
        
        return items1.map((item) => {
            
            return (
                <Post onDeleted={(e) => this.props.onDeleted(item.id)} key={item.id + `post`} item={item}/>        
        )   
    });
}

   render() {
       const items = this.props.items
       const items_list = this.showList(items)


       console.log('soc', this.state.items)
       return (
           <div className="items-list">   
               {items_list}       
           </div>
       )
   }

}

 