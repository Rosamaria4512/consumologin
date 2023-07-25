import React from "react";
//css
import "../Assets/css/Login.css";
//img
import logo from "../Assets/img/iconoreact.png";
//servicios
import { Apiurl } from "../services/apirest";
//librerias
import axios from 'axios';

class Login extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };

  manejadorchange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    //console.log(this.state.form);
  };

  manejadorBoton=()=>{
    let url = Apiurl +"/auth/login"
    axios.post(url,this.state.form)
    .then(response=>{
        console.log(response)
    })
 
  }

  manejadorSubmit(e) {
    e.preventDefault()
  };

  manejadorSubmit2 = (e) => {
    e.preventDefault()
  };

render(){
    return (
         <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src={logo} width="100px" alt="User Icon" />
            </div>

            <form onSubmit={this.manejadorSubmit}>
              <input
                type="text"
                className="fadeIn second"
                name="username"
                placeholder="username"
                onChange={this.manejadorchange}
              />
              <input
                type="password"
                className="fadeIn third"
                name="password"
                placeholder="password"
                onChange={this.manejadorchange}
              />
              <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton} />
            </form>

            <div id="formFooter"></div>
           
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
