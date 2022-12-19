
import './Home.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';



function Home() {
const [photos,setPhotos] = useState([])
const [currentPage,setCurrentPage] = useState(1)
const [fetching,setFetching] = useState(true)


useEffect(()=>{
  if(fetching){
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(response=>setPhotos(response.data))
  }
},[fetching])

useEffect(()=>{
  document.addEventListener('scroll',scrollHandler)
  return function (){
    document.removeEventListener('scroll',scrollHandler)
  }
},[])

const scrollHandler = (e) => {
  console.log('scrollHeight',e.target.documentElement.scrollHeight);
  console.log('scrollHeight',e.target.documentElement.scrollTop);
  console.log('scrollHeight',window.innerHeight);
}
return(
  <div className='home'>
  {
    photos.map(photo =>
      <div className='photo'>
          <img src={photo.url} alt="" />
      </div>
      )
  }
  </div>
)
}

export default Home;
