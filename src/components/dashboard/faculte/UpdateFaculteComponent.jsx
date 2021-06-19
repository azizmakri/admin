import React, { Component } from 'react'
import FaculteService from '../../services/FaculteService';

class UpdateFaculteComponent extends Component {
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
        this.updateFaculte = this.updateFaculte.bind(this);
    }

    componentDidMount(){
        FaculteService.getFaculteById(this.state.id).then( (res) =>{
            let faculte = res.data;
            this.setState({nom: faculte.nom,
                description: faculte.description,
                image : faculte.image
            });
        });
    }

    updateFaculte = (e) => {
        e.preventDefault();
        let faculte = {nom: this.state.nom, description: this.state.description, image: this.state.image};
        console.log('faculte => ' + JSON.stringify(faculte));
        console.log('id => ' + JSON.stringify(this.state.id));
        FaculteService.updateFaculte(faculte, this.state.id).then( res => {
            this.props.history.push('/facultes');
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
        this.props.history.push('/facultes');
    }

    render() {
        return (
            <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                        <h2>Modifier<b>Faculte</b></h2>
                        </div>
                      </div>
  
  
                    </div>
                    
                    <form>
                                        <div className = "form-group">
                                            <label> Nom faculte </label>
                                            <input placeholder="Nom Faculte" name="nom faculte" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-outline-success" onClick={this.updateFaculte}>Modifier et Enregistrer</button>
                                        <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
          
                </div>
          
       
  
  
  </div>
        )
    }
}

export default UpdateFaculteComponent
