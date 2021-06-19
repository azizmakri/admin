import React, { Component } from 'react'
import MetierService from '../../services/MetierService'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {InputGroup, FormControl,Button} from 'react-bootstrap';
import MyToast from '../MyToast';


import './ListMetierComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
class ListMetierComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                search:'',
                metiers: [],
                currentPage: 1,
                metiersPerPage:5
        }
        this.addMetier = this.addMetier.bind(this);
        this.editMetier = this.editMetier.bind(this);
        this.deleteMetier = this.deleteMetier.bind(this);
    }

    deleteMetier(id){
        MetierService.deleteMetier(id).then( res => {
            this.setState({"show":true});
            setTimeout(()=> this.setState({"show":false}), 3000);
            this.setState({metiers: this.state.metiers.filter(metier => metier.id !== id)});
        
        });
    }
    viewMetier(id){
        this.props.history.push(`/view-metier/${id}`);
    }
 
    editMetier(id){
        this.props.history.push(`/update-metier/${id}`);
    }

    componentDidMount(){
        let request = {
            name : this.state.search
        }
        MetierService.getMetiers(request).then((res) => {
            this.setState({ metiers: res.data});
        });
    }

    search = () => {

        
        let request = {
            name : this.state.search
        }
        MetierService.getMetiers(request).then((res) => {
            this.setState({ metiers: res.data});
        });
    }

    addMetier(){
        this.props.history.push('/add-metier/_add');
    }

    changePage = event => {
        this.setState({
           [event.target.name]: parseInt(event.target.value) 
        });
    }
    firstPage = () => {
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: 1
            });
        }
    };
    prevPage = () => {
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };
    lastPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.metiers.length / this.state.metiersPerPage)){
            this.setState({
                currentPage: Math.ceil(this.state.metiers.length / this.state.metiersPerPage)
            });
        }
    };
    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.metiers.length / this.state.metiersPerPage)){
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };
    searchChange = event =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    cancelSearch =() =>{
        this.setState({"search":''})
    };

    render() {
        const {metiers, currentPage, metiersPerPage,search}= this.state;
        const lastIndex = currentPage * metiersPerPage;
        const firstIndex =lastIndex - metiersPerPage;
        const currentMetiers = metiers.slice(firstIndex, lastIndex);
        const totalPages = metiers.length / metiersPerPage;
    const pageNumCss = {
        width: "54px",
        border: "1px solid #17A288",
        color: "#17A2B8",
        textAlign: "center",
        fontWeight: "bold"
    };
        return (
            <div class="container">
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children ={{show:this.show, message:"Specialité supprimé avec succés"}}/>
                </div>
              <div class="table-wrapper">
                  <div class="table-title">
                      <div class="row">
                          <div class="col-sm-6">
                           <h2>List<b>Metiers</b></h2>
                          </div>
                
                          <div class="col-sm-6">
                          <button class="btn btn-outline-info" onClick={this.addMetier}><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>Ajouter une nouvelle metier</span></button>
                         
                        <div style={{"float":"right","margin-top":"20px"}}>
                            <InputGroup size="sm">
                            <FormControl placeholder="rechrcher" name="search" value={search} className={"info-border bg-dark text-white"}
                            onChange={this.searchChange}  />
                            <InputGroup.Append>
                                <Button size="sm" variant="outline-info" type="button"><FontAwesomeIcon icon={faSearch} onClick={this.search}/></Button>
                                <Button size="sm" variant="outline-danger" type="button" onClick={this.cancelSearch}><FontAwesomeIcon icon={faTimes}/></Button>
                            </InputGroup.Append>
                            </InputGroup>
                        </div>
											
					</div>
                       

                      </div>
                  </div>
                  <table class="table table-striped table-hover">
                  <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Nom  metier</TableCell>
            <TableCell >Description</TableCell>

            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
         currentMetiers.map(
             metier => 
            <TableRow key = {metier.id}>
              <TableCell component="th" scope="row">
              {metier.id}
              </TableCell>
              <TableCell > { metier.nom} </TableCell>
              <TableCell >{metier.description}</TableCell>

           
              <TableCell ><button onClick={ () => this.editMetier(metier.id)} className="btn btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                         <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                         </svg></button></TableCell>

                         <TableCell><button style={{marginLeft: "10px"}} onClick={ () => this.deleteMetier(metier.id)} className="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
         </svg></button></TableCell>
         <TableCell> <button style={{marginLeft: "10px"}} onClick={ () => this.viewMetier(metier.id)} className="btn btn-info">View </button></TableCell>
             
               
              
            </TableRow>
                )
            }
        </TableBody>

            </table>
         


  </div>
    <div>
        Showing Page {currentPage} of {totalPages}
    </div>     
    <div>
        <InputGroup size="sm">
            <InputGroup.Prepend>
               <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
               onClick={this.firstPage}>
                    First
                </Button>
                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                onClick={this.prevPage}>
                    Prev
                </Button> 
                <FormControl style={pageNumCss} name="currentPage" value={currentPage}
                onChange={this.changePage} />
            </InputGroup.Prepend>
            <InputGroup.Append>
               <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
               onClick={this.nextPage}>
                    Next
                </Button>
                <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                onClick={this.lastPage}>
                    Last
                </Button> 
            </InputGroup.Append>
        </InputGroup>
    </div> 

     </div> 
        )
    }
}

export default ListMetierComponent