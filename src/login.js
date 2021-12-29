import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

const Login = () => {
  return (
    <div className='App'>
      <h1>LEASURE HOBBIES</h1>
      <div>
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
