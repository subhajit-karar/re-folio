import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class Todo extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className="container text-center">
                <h3 className="mb-5">Todo List</h3>
                <div className="bg-danger text-white col-lg-3 col-md-4 mx-auto">
                    This task is <strong>in Progress</strong> in localhost
                </div>
            </div>
        )
    }
}

export default Todo
