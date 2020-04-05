import React, { Component } from 'react';

import './futures-list.css';

export default class FuturesList extends Component {

    state = {
        features: []
    }

    componentDidMount(){
        const { getData } = this.props
        
        getData().then((data) => {
            this.setState({ features: data.data })
        })
    }

    build_list(){
        let { features } = this.state
        let featArray = [...features]
        return featArray.map((element) => {
            return <li key={element.id}>{element.content}</li>
        })
    }

    addFeature = (e) => {
        
    }


    render() {
        let li_features = this.build_list()

        return(
            <div>
                <ul>
                    {li_features}
                    <label for="add-item">Add Item</label>
                    <input name="add-item" type="text" 
                            onChange={this.addFeature}/>
                </ul>
            </div>
        )
    }
}