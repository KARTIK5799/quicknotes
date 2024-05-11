import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate=useNavigate()

  const handleLogin=async(e)=>{
    e.preventDefault();
    if(!validateEmail(email)){
      setError("Plese Enter valid Email Address");
      return;
    }

    if (!password) {
      setError("Plese Enter valid Password");
      return;
  }
  

    setError("");


    ///login Api Call

    try {
      const response=await axiosInstance.post("/login",{
        email:email,
        password:password,
      });

      if(response.data && response.data.accessToken){
        localStorage.setItem("token",response.data.accessToken);
        navigate("/dashboard")
      }
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        setError(error.response.data.message);
      }else{
        setError("An Unexpecetd error Occured ,please try again");
      }
    }
  }

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}/>

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not Register yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
