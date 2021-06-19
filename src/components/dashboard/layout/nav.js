import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


class Nav1 extends Component {

    render(){
        return (
          <div className="nav1">
              <div class="container">
              <div class="k">
      	<span > Univers</span>
	
      	<span class="letter"></span>
	      <span>Africa</span>

        </div>
       </div>
  
   
    
  <div class="scanlines"></div>
  <div><a href="/profile" type="button" class="btn btn-outline-light">

                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
               </svg>
              </a></div>
            <div>
          
                <div><a href="/login" type="button" class="btn btn-outline-light" onClick={()=>{localStorage.clear()
                window.location.reload(false);
                }}>
                  
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30"  fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
              </a></div>
              
            </div>

            
  
          </div>
        )}
}
export default Nav1