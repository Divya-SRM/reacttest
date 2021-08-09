import React,{useState} from 'react';
export default function Dashboard(){
    const[res,setResult]=useState([]);
    const handleOnClick=()=>{
        fetch("http://localhost:4000/register").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    }
    return(
        <div>
          
         <table border="2px"> <tr> <input type="submit" onClick={handleOnClick} value="view"/></tr> 
           <tr> <td><h4>User Details</h4></td></tr><tr>
           <td><h4>Username</h4></td>
           <td><h4>Email Id</h4></td></tr>
           <td><h4>Phone</h4></td>
              {res.map((x) => {
                return <tr><td><label key={x.id}>{x.username}</label></td>
                <td><label key={x.id}>{x.email}</label></td>
                <td><label key={x.id}>{x.phone}</label></td>
                </tr>
              })}
              
              
            </table>
            
        </div>
    )
}