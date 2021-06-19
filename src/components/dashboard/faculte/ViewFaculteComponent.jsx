import React, { Component } from 'react'
import FaculteService from '../../services/FaculteService'

class ViewFaculteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            faculte: {}
        }
    }

    componentDidMount(){
        FaculteService.getFaculteById(this.state.id).then( res => {
            this.setState({faculte: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">  Details du Faculte</h3>
                    <div className = "card-body">
                        <div className = "row">
                            
                            <div> { this.state.faculte.nom }</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.faculte.description }</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.faculte.image }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFaculteComponent
