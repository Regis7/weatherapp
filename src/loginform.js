import React,{useState} from "react"
import './App.css';

const LoginForm = () =>{
    const[username ,setUsername]=useState("");
    const[email ,setEmail]=useState("");
    const[password ,setPassword]=useState("");
    const [allEntry, setAllEntry] = useState([]);
    const SubmitForm =(e) => {
        e.preventDefault();
        const newEntry = {username:username,email:email,password:password};
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);

    }
    return(
        <div className="App">
        <div className="LoginCard">
      <div className="header">
      </div>
          <form action="" onSubmit={SubmitForm}>
          <h1 className="font"> Login Form </h1>
          <div className="input">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
              />
          </div>
          <div className="input">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" 
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
              />
          </div>
          <div className="input">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
              />
          </div>
          <div  className="Button">
          <button type="submit"> Login </button>
          </div>
        </form> 
        <div>
        { allEntry.map((curElem)=>{
            return(
        <div>
        <p> {curElem.username}</p>
        <p> {curElem.email}</p>
        <p> {curElem.password}</p>
     </div>
     )
     })
     }
     </div>
        </div>
        </div>
    )
}
export default LoginForm