import React, { Component } from 'react';

import './futures-list.css';
import DataService from '../../services/data_service';


export default class FuturesList extends Component {

    state = {
        features: [],
        feature: ''
    }

    data_service = new DataService()

    componentDidMount(){
        const { getData } = this.props
        
        getData().then((data) => {
            this.setState({ features: data.data })
        })
    }

    handleDelete(id, featArray){
        let updatedArray = this.data_service.removeFeature(id, featArray)
        this.setState({features: updatedArray})
    }

    build_list(){
        let  {features}  = this.state
        let featArray = [...features]
        return featArray.map((element) => {
            
            return (
                <span key={element.id}>
                    <li key={element.id}>{element.id} {element.content} started at: {element.date_added}</li>
                    <button onClick={() => this.handleDelete(element.id, featArray)}>Delete </button>
                </span>
            )
        })
    }

    addFeature(e) {
        this.setState({feature: e.target.value}) 
    }

    handleSubmit = (e) => {
        e.preventDefault() 
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
      
    handleClick = async () => {
        
        await this.data_service.addFeature(this.state.feature)
        await this.sleep(500)
        
        const { getData } = this.props
        const data = await getData()
        this.setState({ features: data.data })
       
        console.log("features now after", this.state.features)

    }

    render() {
        let li_features = this.build_list()
        console.log(this.state.features)
        return(
            <div>
                <ul className="Features list">
                    {li_features}
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="add-item">Add Item</label>
                        <input name="add-item" type="text" 
                                onChange={(e) => this.addFeature(e)}/>
                        <input type="submit" onClick={() => this.handleClick()} value="Add feature"/>
                    </form>
                </ul>
            </div>
        )
    }
}