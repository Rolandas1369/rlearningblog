import React, { Component } from 'react';

export default class Posts extends Component {
           
        showList(items) {
            return Object.keys(items).map((item) => {
            
                return (
                    <div key={items[item].id + `div`}> 
                        <div key={items[item].id} className="item">{items[item].title}</div>
                        <div key={items[item].id + `tr`} className="item">{items[item].content}</div>
                    </div>
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

