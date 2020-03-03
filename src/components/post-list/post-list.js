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
        
        items1.map((item) => {
            console.log('From prop', item.title)
            return (
                <div>
                    <p>ddd</p>
                </div>
        )
            
    });

}

        

        
        // return Object.keys(items).map((item) => {
        
        //     return (
        //         <div key={items[item].id + `div`} className="listdivs"> 
        //             <div key={items[item].id} className="itemleft">{items[item].title}</div>
        //             <div key={items[item].id + `tr`} className="itemright">{items[item].content}</div>
        //         </div>
        //     )
        // });
    

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

 