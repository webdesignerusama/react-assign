import { useEffect, useState } from 'react';
import './App.css';
// import Header from './components/Header'
// import About from './components/About'
import { Link } from "react-router-dom";

function App() {
   const [data, setdata] =useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=> {return setdata(data) } )
    });
  
  return (

    <div className="App text-center">
    <div className='container mt-5'>
      <h1>Click on IDs</h1>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserID</th>
      <th scope="col">Title</th>
      <th scope="col">Completed</th>
    </tr>
  </thead>
  <tbody>
    { data.map(item=> 
    
     <tr key={item.id}>
      
     <th scope="row"> <Link to={"/details/"+ item.id+'/'+item.userId+'/'+item.title+'/'+item.completed} style={{textDecoration: "none", color:'black'}}> {item.id}</Link></th>
     <td>{item.userId}</td>
     <td>{item.title}</td>
     <td>{JSON.stringify(item.completed)}</td>
    
   </tr>
    
    )
     
    }
   
   
  </tbody>
</table>
</div>
    </div>
  );
}

export default App;
