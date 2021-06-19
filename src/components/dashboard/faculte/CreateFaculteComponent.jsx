import React, { Component } from 'react'
import FaculteService from '../../services/FaculteService';

class CreateFaculteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nom: '',
            description: '',
            image: ''
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateFaculte = this.saveOrUpdateFaculte.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            FaculteService.getFaculteById(this.state.id).then( (res) =>{
                let faculte = res.data;
                this.setState({nom: faculte.nom,
                    description: faculte.description,
                    image : faculte.image
                });
            });
        }        
    }
    saveOrUpdateFaculte = (e) => {
        e.preventDefault();
        let faculte = {nom: this.state.nom, description: this.state.description, image: this.state.image};
        console.log('faculte => ' + JSON.stringify(faculte));

        // step 5
        if(this.state.id === '_add'){
            FaculteService.createFaculte(faculte).then(res =>{
                this.props.history.push('/facultes');
            });
        }else{
            FaculteService.updateFaculte(faculte, this.state.id).then( res => {
                this.props.history.push('/facultes');
            });
        }
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
                      <h2>Ajout<b>Faculte</b></h2>
                      </div>
                    </div>


                  </div>
                  
             <form>
                                        <div className = "form-group">
                                            
                                            <input placeholder="Nom Faculte" name="nom faculte" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                       
                                        <input  type="file" accept="image/*" name="image" 
                                                value={this.state.image} onChange={this.changeImageHandler}/>
                                        </div>
                                <hr></hr>
                                        <button className="btn btn-outline-success" onClick={this.saveOrUpdateFaculte}>Enregistrer</button>
                                        <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
        
              </div>
        
     


</div>
        )
    }
}

export default CreateFaculteComponent
