import React, { Component } from 'react';

import './navigatable_list.css'
import DataService from '../../services/data_service';

export default class NavigatableList extends Component {

    data_service = new DataService()

    state = {
        navigate: {},
        hasError: false
    }

    componentDidMount() {   
        this.data_service.getAllPosts()
        .then((data) => {
            this.setState({ navigate: data.data})
        })
    }

    createNavigatableList = (nav_list) => {
        
       return nav_list.map((element) => {
            return <div key={element.id}><a href={"#" + element.id}>{element.id}. {element.title}</a></div>
        });
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {

        if(this.state.hasError){
            return <p style={{ color: 'red'}}>You created error no list will be displayed</p>
        }

        let nav_list = this.state.navigate
        let completed_list = ''
        if(nav_list.length > 0){
            completed_list = this.createNavigatableList([...nav_list])
        }

        return(
            <div className="navigatable-list">
                <h3>Posts navigatable list</h3>
                    {completed_list}
                    <ErrorButton />
            </div>
        )
    }
}

class ErrorButton extends Component {
    state = {
        render_error: false
    }
    render() {
        if(this.state.render_error){
            this.foo.bar = 1
        }
        return (
            <button onClick={() => this.setState({render_error: true})}>Break List</button>
        )
    }
}