import React, { Component } from 'react'
import SpecialiteService from '../../services/SpecialiteService';

class UpdateSpecialiteComponent extends Component {
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
        this.updateSpecialite = this.updateSpecialite.bind(this);
    }

    componentDidMount(){
        SpecialiteService.getSpecialiteById(this.state.id).then( (res) =>{
            let specialite = res.data;
            this.setState({nom: specialite.nom,
                description: specialite.description,
                image : specialite.image
            });
        });
    }

    updateSpecialite = (e) => {
        e.preventDefault();
        let specialite = {nom: this.state.nom, description: this.state.description, image: this.state.image};
        console.log('specialite => ' + JSON.stringify(specialite));
        console.log('id => ' + JSON.stringify(this.state.id));
        SpecialiteService.updateSpecialite(specialite, this.state.id).then( res => {
            this.props.history.push('/specialites');
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
        this.props.history.push('/specialites');
    }

    render() {
        return (
            <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                        <h2>Modifier<b>Specialite</b></h2>
                        </div>
                      </div>
  
  
                    </div>
                    
                    <form>
                                        <div className = "form-group">
                                            <label> Nom specialite </label>
                                            <input placeholder="Nom Specialite" name="nom specialite" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-outline-success" onClick={this.updateSpecialite}>Modifier et Enregistrer</button>
                                        <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
          
                </div>
          
       
  
  
  </div>
        )
    }
}

export default UpdateSpecialiteComponent
