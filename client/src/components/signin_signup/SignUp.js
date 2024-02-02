import { Divider } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    const addData=(e)=>{
        const {name,value} = e.target;
        setUdata(()=>{
          return{
            ...udata,
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
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname" id="name" 
                            onChange={addData} value={udata.fname}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" 
                            onChange={addData} value={udata.email}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile" id="mobile" 
                            onChange={addData} value={udata.mobile}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="At least 6 characters" 
                            onChange={addData} value={udata.password}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password" name="cpassword" id="passwordg" 
                            onChange={addData} value={udata.cpassword}
                            />
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?</p>
                           <NavLink to={'/login'}>Sign In</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup;