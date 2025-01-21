import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
const {UserLogin}=useContext(AuthContext)
    const HandelLoging=(e)=>{
        e.preventDefault(e)
        const form=e.target
        const email=form.email.value
        const password =form.password.value
        console.log(email,password);
    UserLogin(email,password)
    .then(result=>{
        console.log(result.user);
        Swal.fire({
            icon: "success",
            title: "Welcome",
            text: "Login SuccesFully",
            
          });
    })
    .catch(err=>{
        console.log(err);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your provided info is incorrect ",
            
          });
    
    })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={HandelLoging} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                  <p>new ? <Link className="font-semibold text-sky-950" to={'/register'}>Register here</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;