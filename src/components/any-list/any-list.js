import React, { Component } from 'react';
import DataService from '../../services/data_service';

import './any-list.css';

export default class AnyList extends Component {

    data_service = new DataService()

    // state is in both
    state = {
        items: [],
        feature: ''
    }

    componentDidMount(){
        const { getData } = this.props
        
        getData().then((data) => {
            this.setState({ items: data.data })
        })
    }
    // 2. handle delete
    handleDelete(id, featArray, feature){
        let updatedArray = this.data_service.removeFeature(id, featArray, feature)
        this.setState({items: updatedArray})
    }


    // added basic building block
    build_list(user){
        let  {items}  = this.state
        let featArray = [...items]
        
        

        return featArray.map((element) => {
            
            return (
                <span className="list-item" key={element.id}>
                    <li key={element.id}>{element.id} {element.content} 
                    {this.props.feature === "features" ? `Started at: ${element.date_added}`: null}
                    </li>
                    { user ?  <button onClick={() => this.handleDelete(element.id, featArray, this.props.feature)}>Delete </button> : null } 
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
        
        await this.data_service.addFeature(this.state.feature, this.props.feature)
        await this.sleep(500)
        
        const { getData } = this.props
        const data = await getData()
        this.setState({ items: data.data })
    }

    render() {

        const {user} = this.props
        let elem = this.build_list(user)

        let inputField = ''
        if(user) {
            inputField = (
                <form onSubmit={this.handleSubmit}>
                        <label htmlFor="add-item">Add Item</label>
                        <input name="add-item" type="text" 
                                onChange={(e) => this.addFeature(e, this.props.feature)}/>
                        <input type="submit" onClick={() => this.handleClick()} value="Add feature"/>
                </form>
            )
        } else {
            inputField = null
        }


        return(
            <div className="any-list">
                <h1>{this.props.headline === "Features" ? "Features": "Insights"}</h1>
                {elem}
                {inputField}
            </div>
        )
    }

}