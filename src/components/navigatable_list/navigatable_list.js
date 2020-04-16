import React, { Component } from 'react';

import './navigatable_list.css'

export default class NavigatableList extends Component {

    state = {
        navigate: {},
        hasError: false
    }

    componentDidMount() {   
        const { getData } = this.props
        getData()
        .then((data) => {
            this.setState({ navigate: data.data})
        })
    }

    createNavigatableList = (nav_list) => {
       let navListSorted = nav_list.sort((a,b) => b.id - a.id)
       return navListSorted.map((element) => {
            return <div className="text-blue-500 hover:text-blue-800" key={element.id}><a href={"#" + element.id}>{element.id}. {element.title}</a></div>
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
            <div className="any-list">
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