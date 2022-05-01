import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
// import Header from './components/Header'
// import About from './components/About'
function App() {
   const [data, setdata] =useState([])
   const router = useNavigate()
   const changeRoute = route => {
     router("/details/"+ route.id+'/'+route.userId+'/'+route.title+'/'+route.completed)
   }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=> {return setdata(data) } )
    });
  
  return (

    <div className="App text-center">
    <div className='container mt-5'>
     
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
    
     <tr key={item.id} onClick={() =>changeRoute(item)} style={{textDecoration: "none", color:'black'}}>
      
     <td scope="row"> {item.id} </td>
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
