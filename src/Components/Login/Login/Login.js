import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import LoginBg from "../../../images/loginBg.png"
import firebaseConfig from './firebase.config'
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
firebase.initializeApp(firebaseConfig)
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            
            <input type="text" className="form-control text-center"  placeholder="User Name"/>
          </div>
          <div className="form-group">
            
            <input type="password" className="form-control text-center" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot password?</label>
          </div>
          <div className="from-group mt-3">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}> Sign in </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;