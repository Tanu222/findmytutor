import '../assets/styles/register.css';
import { useNavigate } from "react-router-dom";
import { auth, firebaseApp } from "../firebase";

const Register = () => {
    const navigate = useNavigate();
    async function googleLogin() {
        //1 - init Google Auth Provider
        const provider = new auth.GoogleAuthProvider();
        //2 - create the popup signIn
        await auth.signInWithPopup(provider).then(
          async (result) => {
            //3 - pick the result and store the token
            const token = await auth?.currentUser?.getIdToken(true);
            //4 - check if have token in the current user
            if (token) {
              //5 - put the token at localStorage (We'll use this to make requests)
              localStorage.setItem("@token", token);
              //6 - navigate user to the book list
              navigate("/tutor-list");
            }
          },
          function (error) {
            console.log(error);
          }
        );
      }
    return(
        <div className="main-div">
            <input type="email" placeholder="Email..."/>
            <input type="password" placeholder="Password..."/>
            <button className="btn btn-primary" >Submit</button>
            <button onClick={googleLogin} className="login-button">
        GOOGLE
      </button>
        </div>
    )
}

export default Register;