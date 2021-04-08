import React, { Component } from "react";
import ReactModalLogin from 'react-modal-login';
 
class LoginModal extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      showModal: false,
      loading: false,
      error: null
    };
  }
 
  openModal() {
    this.setState({
      showModal: true
    });
  }
 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
 
  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }
 
  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }
 
  startLoading() {
    this.setState({
      loading: true
    });
  }
 
  finishLoading() {
    this.setState({
      loading: false
    });
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
 
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.openModal()}>
        <img src="./assets/login.png" width="40%" alt='' />
        </button>

        <button className="button" onClick={() => this.openModal()}>
        <img src="./assets/signup.png" width="40%" alt='' />
        </button>
 
        <ReactModalLogin
        style={}
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
       
        />
      Yo Aidan</div>
    );
  }
};
console.log(LoginModal);
export default LoginModal;



// import React, { Component } from "react";
// import ReactModalLogin from 'react-modal-login';
 
// class LoginModal extends Component {
//   handleSignup = (username, email, password) => {};
//   handleLogin = (username, password) => {}
 
//   render() {
//     return (
//       <div>
     
//         handleSignup={this.handleSignup}
//         handleLogin={this.handleLogin}
      
//       </div>
//     );
//   }
// }

// export default LoginModal;
 