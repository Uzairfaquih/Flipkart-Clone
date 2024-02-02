import { NavLink } from 'react-router-dom';
import './SigninSignup.css';
import { useState } from 'react';
const SignIn = () => {
  const [logData, setlogData] = useState({
    email:"",
    password:""
  })

  const addData=(e)=>{
    const {name,value} = e.target;
    setlogData(()=>{
      return{
        ...logData,
        [name]:value
      }
    });
  }
    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" 
                            onChange={addData}
                            value={logData.email}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="At least 6 characters" 
                            onChange={addData}
                            value={logData.password}
                            />
                        </div>
                        <button type="submit" className="signin_btn">Continue</button>
                    </form>
                    {/* <ToastContainer /> */}
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                   <NavLink to="/register"><button>Create your Amazon Account</button></NavLink>
                </div>
            </div>

        </section>
    )
}

export default SignIn