import React, { Component } from 'react'
import MetierService from '../../services/MetierService'

class ViewMetierComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            metier: {}
        }
    }

    componentDidMount(){
        MetierService.getMetierById(this.state.id).then( res => {
            this.setState({metier: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">  Details du Metier</h3>
                    <div className = "card-body">
                        <div className = "row">
                            
                            <div> { this.state.metier.nom }</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.metier.description }</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.metier.image }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMetierComponent
