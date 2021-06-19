import React, { Component } from 'react'
import SpecialiteService from '../../services/SpecialiteService'

class ViewSpecialiteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            specialite: {}
        }
    }

    componentDidMount(){
        SpecialiteService.getSpecialiteById(this.state.id).then( res => {
            this.setState({specialite: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">  Details du Specialite</h3>
                    <div className = "card-body">
                        <div className = "row">
                            
                            <div> { this.state.specialite.nom }</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.specialite.description }</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.specialite.image }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSpecialiteComponent
