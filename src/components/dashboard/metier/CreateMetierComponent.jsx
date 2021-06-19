import React, { Component } from 'react'
import MetierService from '../../services/MetierService';

class CreateMetierComponent extends Component {
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
        this.saveOrUpdateMetier = this.saveOrUpdateMetier.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            MetierService.getMetierById(this.state.id).then( (res) =>{
                let metier = res.data;
                this.setState({nom: metier.nom,
                    description: metier.description,
                    image : metier.image
                });
            });
        }        
    }
    saveOrUpdateMetier = (e) => {
        e.preventDefault();
        let metier = {nom: this.state.nom, description: this.state.description, image: this.state.image};
        console.log('metier => ' + JSON.stringify(metier));

        // step 5
        if(this.state.id === '_add'){
            MetierService.createMetier(metier).then(res =>{
                this.props.history.push('/metiers');
            });
        }else{
            MetierService.updateMetier(metier, this.state.id).then( res => {
                this.props.history.push('/metiers');
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
        this.props.history.push('/metiers');
    }


    render() {
        return (
            <div class="container">
          <div class="table-wrapper">
              <div class="table-title">
                  <div class="row">
                      <div class="col-sm-6">
                      <h2>Ajout<b>Metier</b></h2>
                      </div>
                    </div>


                  </div>
                  
             <form>
                        <div className = "form-group">
                            
                            <input placeholder="Nom Metier" name="nom metier" className="form-control" 
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
                        <button className="btn btn-outline-success" onClick={this.saveOrUpdateMetier}>Enregistrer</button>
                        <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                    </form>
        
              </div>
        
     


</div>
        )
    }
}

export default CreateMetierComponent
