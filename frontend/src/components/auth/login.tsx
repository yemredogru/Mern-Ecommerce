import React,{useState,useEffect} from 'react';
import './login.css';
import { Container, Row, Col } from 'reactstrap';

export const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <div className='container'>
          <h2>Registered Customers</h2>
          <p>If you have an account, sign in with your email address.</p>
        
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