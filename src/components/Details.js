import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
function Details() {
    const params= useParams()
    const userId=params.userId
    const title= params.title
    const completed= params.completed
    useEffect(() => {
        console.log(params)
    });
    return (
      <div className="mx-auto mt-5" style={{width:300}}>
         <ul >
             <li>{userId}</li>
             <li>{title}</li>
             <li>{completed}</li>
         </ul>
      </div>
    );
  }
  
  export default Details;
  