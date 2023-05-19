import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';



const ProfileForm = () => {

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //Add validation

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCsuDCY5DhfWdOk95ANKkEuMxpBN1jOOWE" ,{
      method: "post",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        "content-type" : "application/json"
      }
    }).then((res) => {
      if(res.ok){
        return res.json();
      }else{
        return res.json().then((data) => {
          let errorMessage = "authentcation Error";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      authCtx.login(data.idToken);
      navigate("/");
    })
    .catch((err) => {
      alert(err.message);

    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
