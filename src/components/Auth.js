import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import { sign_in, sign_out } from "../actions/index";
import "./SignIn.css";

function Auth(props) {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "582124324505-fukh0q08pbk2he0l6m2vikgikt0ivcn1.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
        });
    });
  }, []);
  const onAuthChange = (isSignedIn) => {
    if (isSignedIn === true) {
      return props.sign_in(
        window.gapi.auth2.getAuthInstance().currentUser.get().getId()
      );
    } else {
      return props.sign_out();
    }
  };
  const onSignInClick = () => {
    auth.signIn();
  };
  const onSignOutClick = () => {
    auth.signOut();
  };
  const renderAuthButton = () => {
    if (props.isSignedIn === null) return <div></div>;
    if (props.isSignedIn === true) {
      return (
        <button className="sign" onClick={onSignOutClick}>
          Sign out
        </button>
      );
    } else {
      return (
        <button className="sign" onClick={onSignInClick}>
          Sign in
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.googleauth.isSignedIn,
    userId: state.googleauth.userId,
  };
};
export default connect(mapStateToProps, { sign_in, sign_out })(Auth);
