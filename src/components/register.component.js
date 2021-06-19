import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import './register.component.css'
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const FormItem = Form.Item;
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render(){
    return (
      
     <html>
      <div class="container">
      <div class="d-flex justify-content-center h-100">
      <div class="card2">
      
      <div class="card-header">
    <h3>SignUp</h3>
    
  </div>
  <div class="card-body">

  <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}>
              <table>
          
            {!this.state.successful && (
              <div>
                <tr>
                <div class="input-group form-group">
                <div class="input-group-prepend" >
                 <td>
                 <span class="input-group-text"><i ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                 </svg></i></span>
                 </td>
               </div>
                 
                  <td>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="UserName"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  /></td>
                 </div>
                </tr>
                <tr>
                <div className="form-group">
                <div class="input-group-prepend" >
                  <td>
                  <span class="input-group-text"><i >  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                 <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                     </svg></i></span>
                  </td>
                  <td>
                  <Input
                    type="text"
                    className="form-control" 
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  /></td>
                </div>
                </div>
                </tr>

                <tr>
                <div class="input-group form-group">
                <div class="input-group-prepend">
                  <td>

                  <span class="input-group-text"><i ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
               <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                 </svg></i></span>
                  </td>
                </div>
                <td>
                  <Input
                    type="password"
                    className="form-control" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                  </td>
                </div>
                </tr>
                <tr>
   
                </tr>
                <tr>
                <div className="form-group">
                  <button class="btn btn-warning">Sign Up</button>
                </div>
                </tr>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            </table>
          </Form>
  </div>
  <div class="card-footer">
    <div class="d-flex justify-content-center links">
      You have already an account?<a href="/login"  >SignIn</a>
    </div>

  </div>
</div>
</div>
</div>
</html>
    )}
}
