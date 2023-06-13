import React,{useState,useEffect, useContext} from 'react';
import './login.css';
import { Container, Row, Col, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginService } from '@/services/Auth/login';
import AuthContext from '../../context/authProvider';

export const Login = ()=>{
  const {setAuth}:any = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin=()=>{
      LoginService(email,password).then((res)=>
        {
          localStorage.setItem('token',res.token);
          toast.success("Login successful")
        }
      ).catch(()=>{
        toast.error("Incorrect email or password!")
      })
      
      
    }
    const validator=()=>{
      email == ""? toast.error("Email field is required"):password == "" ? toast.error("Password field is required"):handleLogin()
    }

    return(
      
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <ToastContainer />
        <div className='container'>
          <h2>Registered Customers</h2>
          <p>If you have an account, sign in with your email address.</p>
          <div className='input-email'>
          <Label>*Email</Label>
          <input type='email' onChange={(e)=>setEmail(e.target.value)} required name="email" id="email"></input>
          </div>
          <div className='input-email'>
          <Label>*Password</Label>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} required name="password" id="password"></input>
          </div>
          <button type='button' onClick={validator}>Login</button>
       </div>
       <div className='container'>
       <h2>New Customer ?</h2>
       <p>Creating an account has many benefits:</p>
       <ul>
        <li>Check out faster</li>
        <li>Keep more than one address</li>
        <li>Track orders and more</li>
       </ul>

    </div>
       </div>
    )
}