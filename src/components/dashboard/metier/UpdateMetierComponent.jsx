import React, { Component } from 'react'
import MetierService from '../../services/MetierService';

class UpdateMetierComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nom: '',
            description: '',
            image: ''
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateMetier = this.updateMetier.bind(this);
    }

    componentDidMount(){
        MetierService.getMetierById(this.state.id).then( (res) =>{
            let metier = res.data;
            this.setState({nom: metier.nom,
                description: metier.description,
                image : metier.image
            });
        });
    }

    updateMetier = (e) => {
        e.preventDefault();
        let metier = {nom: this.state.nom, description: this.state.description, image: this.state.image};
        console.log('metier => ' + JSON.stringify(metier));
        console.log('id => ' + JSON.stringify(this.state.id));
        MetierService.updateMetier(metier, this.state.id).then( res => {
            this.props.history.push('/metiers');
        });
    }
    
    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    cancel(){
        this.props.history.push('/metiers');
    }

    render() {
        return (
            <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                        <h2>Modifier<b>Metier</b></h2>
                        </div>
                      </div>
  
  
                    </div>
                    
                    <form>
                                        <div className = "form-group">
                                            <label> Nom metier </label>
                                            <input placeholder="Nom Metier" name="nom metier" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-outline-success" onClick={this.updateMetier}>Modifier et Enregistrer</button>
                                        <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
          
                </div>
          
       
  
  
  </div>
        )
    }
}

export default UpdateMetierComponent
