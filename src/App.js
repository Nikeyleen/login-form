import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import Questionary from './components/Questionary';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password:'admin123'
  }

   const [user, setUser] = useState({name:"", email:"", Gender:""});
   const [error, setError] = useState("");
   
  //  const Gender = details =>{
  //   console.log(details);
  //  }
  // const Gender = datails =>{
  //   setUser({Gender});
  // }

   const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){

      console.log("Logged in");
      setUser({
        
        name: details.name, 
        email: details.email
      });
      
    }else  {
      console.log("Details do not match!");
      setError("Details do not match!!!")
    }
        
  }
  // const Male = details =>{ сорздать инпуты для выбора пола
  //   if({details.male !== true})
  // }
   const Logout = () =>{
    setUser({ name: "", email: "" });
  }
 
    return (
      <div className="App">
        {(user.email !== "") ? (
          <div className='welcome'>
            <h2>Welcome, <span>{user.name}</span></h2>
          
          </div>
          ) : (
          <LoginForm Login={Login} error={error} />
          )}
      </div>
     );
}


export default App;
