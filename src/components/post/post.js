import React, { Component } from 'react';

export default class Posts extends Component {
           
        showList(items) {
            return Object.keys(items).map((item) => {
            
                return ( 
                    <li key={items[item].id} className="item">{items[item].title}</li>
                )
            });
        }  

       render() {
           const items = this.props.items
           const items_list = this.showList(items)

           return (
               <div className="items-list">
                   <ul>
                   {items_list}
                   </ul>  
               </div>
           )
       }

}

