import '../assets/styles/register.css';
const Register = () => {
    return(
        <div className="main-div">
            <input type="email" placeholder="Email..."/>
            <input type="password" placeholder="Password..."/>
            <button className="btn btn-primary" >Submit</button>
        </div>
    )
}

export default Register;