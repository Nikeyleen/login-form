import React, {useState} from 'react';
// import Questionary from './components/Questionary';


function LoginForm({ Login, error}) {
    const[details, setDetails] = useState({name: "", email: "", password: "", Gender:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
  return (
  <form onSubmit={submitHandler}>
    <div className="form-inner">
        <h2>Login</h2>
        {(error !== "") ? (<div className='error'>{error}</div> ) : ""}
        <div className="form-group">
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className='form-group'>
            <label html="email">Email:</label>
            <input type="email" name='email' id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>

        <input type="submit" value="LOGIN"/>
    </div>
  </form>
  )}
export default LoginForm;
  // ) : (
  // <Questionary question={Questionary} error={error} />
  // )}
  